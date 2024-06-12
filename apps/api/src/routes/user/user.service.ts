import {
    ConflictException,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { eq, or } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from 'src/drizzle/schema';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@Inject('DB') private db: PostgresJsDatabase<typeof schema>) {}

    async find(id: string): Promise<Omit<schema.User, 'password'>> {
        const user = await this.db.query.user.findFirst({
            where: eq(schema.user.id, id),
            columns: {
                password: false,
            },
        });
        if (!user) throw new UnauthorizedException();

        return user;
    }

    async findByName(username: string): Promise<schema.User> {
        const user = await this.db.query.user.findFirst({
            where: eq(schema.user.username, username),
        });
        if (!user) throw new UnauthorizedException();

        return user;
    }

    async findAll(): Promise<Omit<schema.User, 'password'>[]> {
        const users = await this.db.query.user.findMany({
            columns: {
                password: false,
            },
        });
        return users;
    }

    async create(
        userDTO: CreateUserDTO,
    ): Promise<Omit<schema.User, 'password'>> {
        const existingUser = await this.db.query.user.findFirst({
            where: or(
                eq(schema.user.email, userDTO.email),
                eq(schema.user.username, userDTO.username),
            ),
        });

        if (existingUser)
            throw new ConflictException(
                'Duplicate email or username detected.',
            );

        const hashedPassword = await hash(userDTO.password, 10);

        const newUser: Omit<schema.User, 'id'> = {
            username: userDTO.username,
            email: userDTO.email,
            firstName: userDTO.firstName ?? null,
            lastName: userDTO.lastName ?? null,
            dateJoined: new Date(Date.now()).toISOString(),
            password: hashedPassword,
        };

        const newUserResponse = await this.db
            .insert(schema.user)
            .values(newUser)
            .returning();

        const { password: _, ...result } = newUserResponse[0];
        return result;
    }
}

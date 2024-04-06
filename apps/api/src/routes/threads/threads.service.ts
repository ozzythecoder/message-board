import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from 'src/drizzle/schema';
import { CreateThreadDTO } from './dto/create-thread.dto';

@Injectable()
export class ThreadsService {
    constructor(@Inject('DB') private db: PostgresJsDatabase<typeof schema>) {}

    async findAll(): Promise<schema.Thread[]> {
        const threads = await this.db.query.thread.findMany();
        return threads;
    }

    async find(id: string): Promise<schema.Thread> {
        const thread = await this.db.query.thread.findFirst({
            where: eq(schema.thread.id, id),
        });
        if (!thread) throw new NotFoundException();
        return thread;
    }

    async create(threadDTO: CreateThreadDTO): Promise<schema.Thread> {
        const createThread = await this.db
            .insert(schema.thread)
            .values({
                body: threadDTO.body,
                topicID: threadDTO.topicID,
                authorID: threadDTO.authorID,
                lastReply: new Date(Date.now()),
                createdAt: new Date(Date.now()),
                isLocked: false,
            })
            .returning();

        return createThread[0];
    }
}

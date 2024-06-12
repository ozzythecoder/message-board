import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { CreateThreadDTO } from './dto/create-thread.dto';
import * as schema from 'src/drizzle/schema';

type ThreadWithUser = {
    user: Pick<schema.User, 'username' | 'id'>;
    thread: schema.Thread;
};

@Injectable()
export class ThreadsService {
    constructor(@Inject('DB') private db: PostgresJsDatabase<typeof schema>) {}

    async findByTopic(topicID: string): Promise<ThreadWithUser[]> {
        const threads = await this.db
            .select({
                user: {
                    username: schema.user.username,
                    id: schema.user.id,
                },
                thread: schema.thread,
            })
            .from(schema.thread)
            .where(eq(schema.thread.topicID, topicID))
            .innerJoin(schema.user, eq(schema.user.id, schema.thread.authorID));

        return threads;
    }

    async find(id: string): Promise<ThreadWithUser> {
        const thread = await this.db
            .select({
                user: {
                    username: schema.user.username,
                    id: schema.user.id,
                },
                thread: schema.thread,
            })
            .from(schema.thread)
            .where(eq(schema.thread.id, id))
            .innerJoin(schema.user, eq(schema.user.id, schema.thread.authorID));
        if (thread.length === 0) throw new NotFoundException();
        return thread[0];
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

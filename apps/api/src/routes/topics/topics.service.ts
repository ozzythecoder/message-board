import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from 'src/drizzle/schema';
import { CreateTopicDTO } from './dto/create-topic.dto';

@Injectable()
export class TopicsService {
    constructor(@Inject('DB') private db: PostgresJsDatabase<typeof schema>) {}

    async findAll(): Promise<schema.Topic[]> {
        const topics = await this.db.query.topic.findMany();
        return topics;
    }

    async find(id: string): Promise<schema.Topic> {
        const topic = await this.db.query.topic.findFirst({
            where: eq(schema.topic.id, id),
        });
        if (!topic) throw new NotFoundException();
        return topic;
    }

    async create(createTopicDTO: CreateTopicDTO): Promise<schema.Topic> {
        const createTopic = await this.db
            .insert(schema.topic)
            .values({
                title: createTopicDTO.title,
                description: createTopicDTO.description,
            })
            .returning();

        return createTopic[0];
    }
}

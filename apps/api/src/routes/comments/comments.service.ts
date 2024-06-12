import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from 'src/drizzle/schema';
import { CreateCommentDTO } from './dto/create-comment.dto';

type CommentUserReturn = {
    user: Pick<schema.User, 'id' | 'username'>;
    comment: schema.Comment;
};

@Injectable()
export class CommentsService {
    constructor(@Inject('DB') private db: PostgresJsDatabase<typeof schema>) {}

    async find(commentID: string): Promise<CommentUserReturn> {
        const result = await this.db
            .select({
                user: {
                    username: schema.user.username,
                    id: schema.user.id,
                },
                comment: schema.comment,
            })
            .from(schema.comment)
            .where(eq(schema.comment.id, commentID))
            .innerJoin(
                schema.user,
                eq(schema.user.id, schema.comment.authorID),
            );

        if (result.length === 0) throw new NotFoundException();
        return result[0];
    }

    async findByThread(threadID: string): Promise<CommentUserReturn[]> {
        return await this.db
            .select({
                user: {
                    username: schema.user.username,
                    id: schema.user.id,
                },
                comment: schema.comment,
            })
            .from(schema.comment)
            .where(eq(schema.comment.threadID, threadID))
            .innerJoin(
                schema.user,
                eq(schema.user.id, schema.comment.authorID),
            );
    }

    async create(commentDTO: CreateCommentDTO): Promise<{ id: string }> {
        const newComment: Omit<schema.Comment, 'id'> = {
            authorID: commentDTO.authorID,
            threadID: commentDTO.threadID,
            body: commentDTO.body,
            createdAt: new Date(Date.now()).toISOString(),
        };

        const createComment = await this.db
            .insert(schema.comment)
            .values(newComment)
            .returning({ id: schema.comment.id });

        return createComment[0];
    }

    async delete(commentID: string) {
        return await this.db
            .delete(schema.comment)
            .where(eq(schema.comment.id, commentID));
    }
}

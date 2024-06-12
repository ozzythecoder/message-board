import { z } from 'zod';

export const createCommentSchema = z.object({
    authorID: z.string().uuid(),
    threadID: z.string().uuid(),
    body: z.string().max(5000),
});

export type CreateCommentDTO = z.infer<typeof createCommentSchema>;

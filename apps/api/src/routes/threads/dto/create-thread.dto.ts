import { z } from 'zod';

export const createThreadSchema = z.object({
    title: z.string().max(300),
    body: z.string().max(5000),
    topicID: z.string().uuid(),
    authorID: z.string().uuid(),
});

export type CreateThreadDTO = z.infer<typeof createThreadSchema>;

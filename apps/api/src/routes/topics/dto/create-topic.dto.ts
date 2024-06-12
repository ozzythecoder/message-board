import { z } from 'zod';

export const createTopicSchema = z.object({
    title: z.string(),
    description: z.string().max(300),
});

export type CreateTopicDTO = z.infer<typeof createTopicSchema>;

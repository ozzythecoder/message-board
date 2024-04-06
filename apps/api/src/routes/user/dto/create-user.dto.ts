import { z } from 'zod';

export const createUserSchema = z.object({
    username: z.string().max(32),
    email: z.string(),
    password: z.string(),
    firstName: z.string().max(40).optional(),
    lastName: z.string().max(40).optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

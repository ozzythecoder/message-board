import { z } from 'zod';

export const signInSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export type SignInDTO = z.infer<typeof signInSchema>;

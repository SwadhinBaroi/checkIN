import { z } from 'zod';

export const loginSchema = z.object({
  passcode: z.string().min(4, 'Passcode must be at least 4 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type LoginData = z.infer<typeof loginSchema>;

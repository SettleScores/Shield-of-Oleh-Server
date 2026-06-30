import { ZodError } from 'zod';

export function mapZodError(err: ZodError) {
  return err.issues.map(i => ({
    field: i.path.join('.'),
    message: i.message,
  }));
}
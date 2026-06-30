import { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodError } from 'zod';
import { ValidationError } from '../errors/ValidationError';
import { mapZodError } from '@src/common/utils/zodErrorMapper';

/// Централізований Валідатор по Zod Schema + Zod Errors with Mapper
export const validate =
  // Використовуємо ZodObject<any>, щоб приймати будь-яку схему об'єкта
  (schema: ZodObject<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // parse() повертає очищені дані, перезаписуємо req.body
      req.body = schema.parse(req.body);

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return next(new ValidationError(mapZodError(err)));
      }
      next(err);
    }
  };
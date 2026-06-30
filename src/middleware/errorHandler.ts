import { Request, Response, NextFunction } from 'express';
import { RouteError } from '../errors/RouteError';

// Express розуміє, що це обробник помилок, ТОЛЬКИ якщо функція приймає рівно 4 аргументи
export function errorHandler(
  err: any, // або Error / unknown, залежно від суворості TS
  req: Request,
  res: Response,
  next: NextFunction
) {
  // CUSTOM ERRORS
  if (err instanceof RouteError) {
    return res.status(err.status).json({
      success: false,
      code: err.code,
      errors: err.details,
    });
  }

  // UNEXPECTED ERRORS
  console.error(err);

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
}
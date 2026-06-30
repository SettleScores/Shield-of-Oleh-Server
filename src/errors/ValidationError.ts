import { RouteError } from './RouteError';

export class ValidationError extends RouteError {
  constructor(errors: unknown[]) {
    super(
      400,
      'VALIDATION_ERROR',
      errors
    );
  }
}
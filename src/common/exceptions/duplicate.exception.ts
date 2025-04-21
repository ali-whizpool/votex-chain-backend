import { ConflictException } from '@nestjs/common';

export class DuplicateException extends ConflictException {
  constructor() {
    super({
      errorType: 'DUPLICATE_ERROR',
      message: `Record with same info already exist`,
    });
  }
}

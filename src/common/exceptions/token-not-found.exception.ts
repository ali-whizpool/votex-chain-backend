import { UnauthorizedException } from '@nestjs/common';

export class TokenNotFoundException extends UnauthorizedException {
  constructor() {
    super({
      errorType: 'MISSING_TOKEN',
      message: 'Token not found',
    });
  }
}

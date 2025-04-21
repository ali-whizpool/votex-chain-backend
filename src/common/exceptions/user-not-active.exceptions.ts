import { UnauthorizedException } from '@nestjs/common';

export class UserNotActiveException extends UnauthorizedException {
  constructor() {
    super({
      errorType: 'NON-Active USER',
      message: 'user not active',
    });
  }
}

// import {
//   CanActivate,
//   ExecutionContext,
//   HttpException,
//   HttpStatus,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import * as admin from 'firebase-admin';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { TokenNotFoundException } from '../exceptions/token-not-found.exception';

// @Injectable()
// export class TokenGuard implements CanActivate {
//   constructor(private readonly prisma: PrismaService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();

//     if (!request.headers.authorization) {
//       throw new TokenNotFoundException();
//     }

//     const token = request.headers.authorization.split(' ')[1];

//     try {
//       const firebaseUser = await admin.auth().verifyIdToken(token);
//       const user = await this.prisma.user.findFirst({
//         where: { firebaseId: firebaseUser.uid },
//       });

//       if (!firebaseUser || !user) {
//         throw new UnauthorizedException();
//       }

//       request.user = user;
//       return true;
//     } catch (error) {
//       if (error['code'] === 'auth/id-token-expired') {
//         throw new HttpException('Token Expired', HttpStatus.GONE);
//       }

//       throw new UnauthorizedException();
//     }
//   }
// }

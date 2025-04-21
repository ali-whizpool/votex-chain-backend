// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Roles } from '../decorators/roles.decorator';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.reflector.get<string[]>(Roles, context.getHandler());

//     if (!roles?.length) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;

//     return matchRoles(roles, user.role);
//   }
// }

// const matchRoles = (roles: string[], userRole: string) =>
//   roles.some((role) => role === userRole);

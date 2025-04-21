import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';
import { Reflector } from '@nestjs/core';
import { SKIP_RESPONSE_TRANSFORM_KEY } from '../decorators/skip-response-transform.decorator';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const skipTransform = this.reflector.get<boolean>(
      SKIP_RESPONSE_TRANSFORM_KEY,
      context.getHandler(),
    );

    if (skipTransform) {
      return next.handle();
    }
    
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse<Response>();
    return next.handle().pipe(
      map((data) => {
        const statusCode = response.statusCode;

        let message = '';
        // Assign some generic messages based on status code
        switch (statusCode) {
          case 200:
            message = 'Request successful';
            break;
          case 201:
            message = 'Record created successfully';
            break;
          case 204:
            message = 'Record deleted successfully';
            break;
          default:
            message = 'Operation successful';
        }

        return {
          status: 'success',
          message,
          details: {},
          data: data || {},
        };
      }),
    );
  }
}

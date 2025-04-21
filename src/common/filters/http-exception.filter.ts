import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'An unexpected error occurred';
    let details = {};

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const response = exception.getResponse();
      message = typeof response === 'string' ? response : response['message'];

      if (exception['response'] && exception['response'].errors) {
        details = exception['response'].errors;
      } else if (exception['response'] && exception['response'].issues) {
        details = exception['response'].issues;
      }
    } else if (exception instanceof PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `${exception.meta?.target} already exists`;
          break;
        case 'P2003':
          status = HttpStatus.BAD_REQUEST;
          message = `Foreign key constraint violation for ${exception.meta?.field_name} in ${exception.meta?.modelName}`;
          break;
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = 'Record not found';
          break;
        default:
          status = HttpStatus.BAD_REQUEST;
          message =
            (exception.meta?.message as string) ||
            (exception.meta?.cause as string) ||
            (exception.meta?.target as string) ||
            'Database operation failed';
      }

      details = exception.meta;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    response.status(status).json({
      status: 'error',
      message,
      details,
      data: {},
    });
  }
}

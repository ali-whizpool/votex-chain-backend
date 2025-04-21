import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { Logger } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';

async function startServer() {
  try {
    const app = await NestFactory.create(AppModule);

    // Configure express to handle raw bodies properly for payments webhook(like stripe)
    // import * as express from 'express';
    // app.use(
    //   express.json({
    //     verify: (req: any, res, buf) => {
    //       if (req.url.startsWith('/stripe/webhook')) {
    //         req.rawBody = buf;
    //       }
    //       return true;
    //     },
    //   }),
    // );

    // Apply the response interceptor globally
    app.useGlobalInterceptors(new ResponseInterceptor(new Reflector()));

    // Filter
    app.useGlobalFilters(new HttpExceptionFilter());

    // Validation Pipeline
    app.useGlobalPipes(new ZodValidationPipe());

    // Cross-Origin
    app.enableCors();

    // Listening on the specified port
    const port = process.env.PORT || 3000;
    await app.listen(port).then(() => {
      Logger.log(`
        ##################################################
            ****************************************
                  Server Running on Port ${port}
            ****************************************
        ##################################################
       `);
    });
  } catch (error: any) {
    Logger.error(
      `Server Initialization Failed: ${error.message || 'Unknown error'}`,
      error.stack || '',
      'Bootstrap',
    );
    process.exit(1);
  }
}
startServer();

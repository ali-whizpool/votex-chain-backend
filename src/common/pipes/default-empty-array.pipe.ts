import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class DefaultEmptyArrayPipe implements PipeTransform<unknown, unknown> {
  transform(value: unknown): unknown {
    if (typeof value !== 'undefined') return value;
    return [];
  }
}

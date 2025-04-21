import { HttpException, HttpStatus, PipeTransform } from '@nestjs/common';

export abstract class RelationValidationPipe
  implements PipeTransform<unknown, unknown>
{
  protected allowedRelations = [];

  transform(values: string[]): string[] {
    if (!this.allValuesAreValid(values)) {
      this.allowedRelations.sort();
      const allowedRelationsString = this.allowedRelations.join(', ');
      const exceptionMsg = `Invalid relations. All passed relations must be one of the following: ${allowedRelationsString}`;
      throw new HttpException(exceptionMsg, HttpStatus.BAD_REQUEST);
    }

    return values;
  }

  private allValuesAreValid(values: string[]): boolean {
    return values.every((value) => this.allowedRelations.includes(value));
  }
}

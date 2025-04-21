import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseRelationsPipe implements PipeTransform {
  transform(relations: string[]): Record<string, any> {
    try {
      return relations.reduce((acc, relation) => {
        const parts = relation.split('.');
        let current = acc;

        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          if (i === parts.length - 1) {
            current[part] = true;
          } else {
            current[part] = current[part] || { include: {} };
            current = current[part].include;
          }
        }

        return acc;
      }, {});
    } catch (error) {
      throw new BadRequestException('Invalid relations format');
    }
  }
}

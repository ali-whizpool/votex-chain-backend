import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ParseObjectPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || typeof value !== 'object') {
      return value;
    }

    const parsed = { ...value };
    
    // Recursively parse all properties in the object
    this.parseObjectValues(parsed);
    
    return parsed;
  }

  private parseObjectValues(obj: any): void {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          // Recursively parse nested objects
          this.parseObjectValues(obj[key]);
        } else {
          // Parse string values to appropriate types
          obj[key] = this.parseValue(obj[key]);
        }
      }
    }
  }

  private parseValue(value: any): any {
    if (typeof value !== 'string') {
      return value;
    }
    
    // Parse booleans
    if (value.toLowerCase() === 'true') {
      return true;
    }
    if (value.toLowerCase() === 'false') {
      return false;
    }
    
    // Parse numbers
    if (!isNaN(Number(value)) && value.trim() !== '') {
      return Number(value);
    }
    
    return value;
  }
}

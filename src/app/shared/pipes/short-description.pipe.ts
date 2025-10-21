import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    const limit: number = 110;
    return value.length > limit ? value.slice(0, limit) + '...' : value;
  }
}

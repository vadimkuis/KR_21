import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value.length !== 12) return value;
    const country = value.slice(0, 3);
    const operator = value.slice(3, 5);
    const part1 = value.slice(5, 8);
    const part2 = value.slice(8, 10);
    const part3 = value.slice(10, 12);
    return `+${country} (${operator}) ${part1}-${part2}-${part3}`;
  }
}
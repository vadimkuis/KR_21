import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: number): string {
    if (value == null) return '0.00 руб.';
    const formattedValue = this.currencyPipe.transform(value, 'RUB', 'symbol', '1.2-2', 'ru');
    return formattedValue ? formattedValue.replace(',', '.').replace('₽', 'руб.') : '0.00 руб.';
  }
}
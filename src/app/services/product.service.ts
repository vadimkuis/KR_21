import { Injectable } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        name: 'Макарун с малиной',
        count: 10,
        price: 1.90,
        image: 'mac1.png'
      },
      {
        name: 'Макарун с манго',
        count: 15,
        price: 1.85,
        image: 'mac2.png'
      },
      {
        name: 'Пирог с ванилью',
        count: 12,
        price: 1.50,
        image: 'mac3.png'
      },
      {
        name: 'Пирог с фисташками',
        count: 20,
        price: 1.95,
        image: 'mac4.png'
      }
    ];
  }
}

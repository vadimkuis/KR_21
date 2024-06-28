import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'comp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;
  @Input() index: number;
  @Input() length: number;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      name: '',
      count: 0,
      price: 0,
      image: ''
    }
    this.index = 0;
    this.length = 0;
  }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.product.count--;
    this.addToCartEvent.emit(this.product);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductType } from 'src/types/product.type';
import { ProductService } from './services/product.service';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  @ViewChild('advantagesElement', { static: false }) advantagesElement!: AdvantagesComponent;

  phoneNumber = '375293689868';
  instagramLink = 'https://www.instagram.com/macaroons/';
  showPresent = false;
  products: ProductType[] = [];
  formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  constructor(private productService: ProductService,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  scrollTo(element: HTMLElement): void {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element not found!');
    }
  }

  addToCart(product: ProductType): void {
    this.cartService.count++;
    this.cartService.amount += product.price;
    alert(`${product.name} добавлен в корзину!`);
  }
}

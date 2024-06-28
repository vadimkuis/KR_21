import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AdvantageItemComponent } from './components/advantage-item/advantage-item.component';
import { ProductComponent } from './components/product/product.component';
import { CustomCurrencyPipe } from './pipes/currency-format.pipe';
import { CurrencyPipe } from '@angular/common';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { HoverBackgroundDirective } from './directives/hover-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    AdvantageItemComponent,
    ProductComponent,
    CustomCurrencyPipe,
    TruncateTextPipe,
    PhoneFormatPipe,
    HoverBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

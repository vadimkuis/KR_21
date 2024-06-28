import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeRu, 'ru');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

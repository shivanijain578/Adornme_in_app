import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './views/login/login';
import { Account } from './views/account/account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { About } from './views/about/about';
import { Contact } from './views/contact/contact';
import { TopBar } from './core/top-bar/top-bar';
import { Wishlist } from './views/wishlist/wishlist';
import { Cart } from './views/cart/cart';
import { Address } from './views/checkout/address/address';
import { Delivery } from './views/checkout/delivery/delivery';
import { Payment } from './views/checkout/payment/payment';
import { Summary } from './views/checkout/summary/summary';
import { Success } from './views/checkout/success/success';
import { Product } from './views/product/product';
import { AddProduct } from './views/product/add-product/add-product';
import { ViewProduct } from './views/product/view-product/view-product';
import { LandingPage } from './views/landing-page/landing-page';

@NgModule({
  declarations: [
    App,
    LandingPage,
    Login,
    Account,
    About,
    Contact,
    TopBar,
    Wishlist,
    Cart,
    Address,
    Delivery,
    Payment,
    Summary,
    Success,
    Product,
    AddProduct,
    ViewProduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

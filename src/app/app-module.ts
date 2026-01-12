import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './views/login/login';
import { AccountComponent } from './views/account/account';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductComponent } from './views/product/product';
import { AddProduct } from './views/product/add-product/add-product';
import { ViewProduct } from './views/product/view-product/view-product';
import { LandingPage } from './views/landing-page/landing-page';
import { ForgotPassword } from './views/login/forgot-password/forgot-password';
import { ResetPassword } from './views/login/reset-password/reset-password';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    LandingPage,
    Login,
    AccountComponent,
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
    ProductComponent,
    AddProduct,
    ViewProduct,
    ForgotPassword,
    ResetPassword
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

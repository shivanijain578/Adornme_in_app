import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './views/landing-page/landing-page';
import { Login } from './views/login/login';
import { AccountComponent } from './views/account/account';
import { AuthGuard } from './core/guards/auth.guard';
import { About } from './views/about/about';
import { Contact } from './views/contact/contact';
import { Cart } from './views/cart/cart';
import { Wishlist } from './views/wishlist/wishlist';
import { Address } from './views/checkout/address/address';
import { Delivery } from './views/checkout/delivery/delivery';
import { Payment } from './views/checkout/payment/payment';
import { Summary } from './views/checkout/summary/summary';
import { Success } from './views/checkout/success/success';
import { AddProduct } from './views/product/add-product/add-product';
import { ViewProduct } from './views/product/view-product/view-product';
import { AdminGuard } from './core/guards/admin-guard';
import { ProductComponent } from './views/product/product';
import { ForgotPassword } from './views/login/forgot-password/forgot-password';
import { ResetPassword } from './views/login/reset-password/reset-password';


const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },
  { path: 'products', component: ProductComponent },
  { path: 'products/add', component: AddProduct },
  { path: 'products/edit/:id', component: AddProduct },
  { path: 'products/view/:id', component: ViewProduct },
  {
    path: 'checkout',
    children: [
      { path: 'address', component: Address },
      { path: 'delivery', component: Delivery },
      { path: 'payment', component: Payment },
      { path: 'summary', component: Summary },
      { path: 'success', component: Success },
      { path: '', redirectTo: 'address', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

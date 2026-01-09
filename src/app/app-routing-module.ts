import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './views/landing-page/landing-page';
import { Login } from './views/login/login';
import { Account } from './views/account/account';
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
import { Product } from './views/product/product';


const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: Login },
  { path: 'account', component: Account, canActivate: [AuthGuard] },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },
  {
    path: 'product', component: Product,
    children: [
      { path: 'add', component: AddProduct, canActivate: [AdminGuard] },
      { path: 'edit/:id', component: AddProduct, canActivate: [AdminGuard] },
      { path: 'view/:id', component: ViewProduct }
    ]
  },
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  constructor(private router: Router) { }

  cartItems = [
    { id: 1, name: "Gold Hoop Earrings", price: 899, qty: 1, img: "/assets/img/earring1.jpg" },
    { id: 2, name: "Kundan Bracelet", price: 1599, qty: 2, img: "/assets/img/bracelet1.jpg" }
  ];

  updateQty(item: any, change: number) {
    item.qty = Math.max(1, item.qty + change);
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(x => x.id !== id);
  }

  get total() {
    return this.cartItems.reduce((t, i) => t + i.price * i.qty, 0);
  }
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}

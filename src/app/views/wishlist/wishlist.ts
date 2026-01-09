import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.scss'
})
export class Wishlist {
  wishlist = [
    { id: 1, name: "Gold Hoop Earrings", price: 899, img: "/assets/img/earring1.jpg" },
    { id: 2, name: "Rose Crystal Necklace", price: 1299, img: "/assets/img/necklace1.jpg" }
  ];

  removeItem(id: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== id);
  }

  moveToCart(item: any) {
    // Later: Inject a CartService
    console.log("Added to cart:", item);
    this.removeItem(item.id);
  }
}

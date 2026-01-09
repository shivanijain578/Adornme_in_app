import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.html',
  styleUrl: './address.scss'
})
export class Address {
  address: any = {};

  constructor(private router: Router) { }

  saveAddress() {
    localStorage.setItem('address', JSON.stringify(this.address));
    this.router.navigate(['/checkout/delivery']);
  }
}

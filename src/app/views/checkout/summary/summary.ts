import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary {
  address: any;
  delivery!: string;
  payment: any;
  constructor(private router: Router) { }
  ngOnInit() {
    this.address = JSON.parse(localStorage.getItem('address') || '{}');
    this.delivery = localStorage.getItem('delivery') || 'standard';
    this.payment = JSON.parse(localStorage.getItem('payment') || '{}');
  }

  placeOrder() {
    this.router.navigate(['/checkout/success']);
  }
}

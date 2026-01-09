import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  constructor(private router: Router) { }
  method = '';
  upiId = '';

  savePayment() {
    localStorage.setItem('payment', JSON.stringify({ method: this.method, upiId: this.upiId }));
    this.router.navigate(['/checkout/summary']);
  }
}

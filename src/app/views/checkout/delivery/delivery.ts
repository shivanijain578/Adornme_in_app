import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  standalone: false,
  templateUrl: './delivery.html',
  styleUrl: './delivery.scss'
})
export class Delivery {
  constructor(private router: Router) { }
  selected: string = 'standard';

  select(type: string) {
    this.selected = type;
  }

  continue() {
    localStorage.setItem('delivery', this.selected);
    this.router.navigate(['/checkout/payment']);
  }
}

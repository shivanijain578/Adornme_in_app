import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class AccountComponent {
  user: any;

  constructor(private auth: AuthService, private router: Router) {
  }

  logout() {
    this.router.navigate(['/login']);
  }
}

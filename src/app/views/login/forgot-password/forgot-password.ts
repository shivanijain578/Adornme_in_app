import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {
  email = '';

  constructor(private authService: AuthService) { }

  submit() {
    if (!this.email) return;

    this.authService.forgotPassword({ email: this.email })
      .subscribe({
        next: () => alert('Password reset email sent'),
        error: err => alert(err?.error?.message || 'Failed')
      });
  }
}

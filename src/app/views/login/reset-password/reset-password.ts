import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPassword {

  password = '';
  token: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  resetPassword() {
    if (!this.password || !this.token) return;

    this.authService.resetPassword({
      token: this.token,
      newPassword: this.password
    })
      .subscribe({
        next: () => {
          alert('Password reset successful');
          this.router.navigate(['/login']);
        },
        error: err => alert(err?.error?.message || 'Invalid or expired token')
      });
  }
}
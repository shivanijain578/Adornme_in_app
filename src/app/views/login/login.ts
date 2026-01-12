import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {

  email = '';
  password = '';
  user: any = null;

  constructor(
    private authService: AuthService,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
    this.initializeGoogleSignIn();
  }

  login() {
    if (!this.email || !this.password) return;

    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          const userData = {
            name: res?.user?.name || this.email.split('@')[0],
            email: res?.user?.email || this.email,
            role: res?.user?.role || 'USER',
            token: res?.token
          };

          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigate(['/account']);
        },
        error: err => alert(err?.error?.message || 'Invalid credentials')
      });
  }

  // GOOGLE LOGIN
  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large', width: 280 }
    );
  }

  handleCredentialResponse(response: any) {
    const payload = this.parseJwt(response.credential);
    this.ngZone.run(() => {
      this.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
      this.router.navigate(['/account']);
    });
  }

  parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }
}

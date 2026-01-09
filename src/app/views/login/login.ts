import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  email: string = '';
  password: string = '';
  user: any = null;

  constructor(private ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
    this.initializeGoogleSignIn();
  }

  // Basic login (just a demo, replace with real backend call)
  loginBasic() {
    if (this.email && this.password) {
      const basicUser = {
        name: this.email.split('@')[0],
        email: this.email,
      };
      localStorage.setItem('user', JSON.stringify(basicUser));
      this.user = basicUser;
      this.router.navigate(['/account']); // redirect to account
    }
  }

  // Google login
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

  logout() {
    this.user = null;
    localStorage.removeItem('user');
  }
}
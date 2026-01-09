import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss'
})
export class TopBar {
  isLoggedIn = false;
  isBrowser = false;
  showFilterBar = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public auth: Auth,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateFilterVisibility(event.urlAfterRedirects);
      }
    });
  }

  updateFilterVisibility(currentUrl: string) {
    this.showFilterBar = currentUrl === '/' || currentUrl === '';
  }
}

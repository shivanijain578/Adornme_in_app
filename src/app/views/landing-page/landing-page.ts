import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Auth } from '../../core/services/auth.service';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public auth: Auth) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  products = [
    { image: 'https://sp.yimg.com/ib/th?id=OPAC.eo80Tlobe3%2fd4g474C474&o=5&pid=21.1&w=160&h=105', productName: 'Sette Solitaire Ring, Diamond Engagement Ring (0.2 Ct, IJ-SI), 18 KT Yellow Gold Jewellery. Size 12.', price: '₹53,643.00' },
    { image: 'https://sp.yimg.com/ib/th?id=OPAC.L8QD7%2bQ1vuf%2f9g474C474&o=5&pid=21.1&w=160&h=105', productName: 'Diamond Ring (0.03 Ct, IJ-SI), 14 KT Rose Gold Jewellery - In Fashion Diamond Ring For Women. Design - Minimalist. Size 12.', price: '₹15,277.00' },
    { image: 'https://sp.yimg.com/ib/th?id=OPAC.KNsRZVGk7BjTyA474C474&o=5&pid=21.1&w=160&h=105', productName: 'Diamond Ring (0.11 Ct, FG-SI), 18 KT Yellow Gold Jewellery - Flare Blue Butterfly Diamond Ring For Women. Design - Butterfly. Size 12. From Butterfly', price: '₹75,399.00' },
    { image: 'https://sp.yimg.com/ib/th?id=OPAC.vlbpr8wCYD4Hqg474C474&o=5&pid=21.1&w=160&h=105', productName: 'Gold Ring (6.56 Gm), 18 KT Plain Yellow Gold Jewellery - Ross Gold Band For Men . Design - Top Picks. Size 18.', price: '₹80,550.00' },
    { image: 'https://tse4.mm.bing.net/th/id/OIP.lX2tnHzSXOgdTxvmZ6MYzgHaF7?pid=Api&P=0&h=180', productName: 'Sette Solitaire Ring, Diamond Engagement Ring (0.2 Ct, IJ-SI), 18 KT Yellow Gold Jewellery. Size 12.', price: '₹53,643.00' },
    { image: 'https://sp.yimg.com/ib/th?id=OPAC.UyZtDB%2bz3pnLCQ474C474&o=5&pid=21.1&w=160&h=105', productName: 'Sette Solitaire Ring, Diamond Engagement Ring (0.2 Ct, IJ-SI), 18 KT Yellow Gold Jewellery. Size 12.', price: '₹53,643.00' }
  ];

  banners = [
    { image: 'https://www.joyalukkas.in/media/wysiwyg/Spreading_Joy_Web_Banner_for_JA_website-02_1.jpg', title: 'img1' },
    { image: 'https://www.joyalukkas.in/media/wysiwyg/2560_X_930_copy_2_.jpg', title: 'img2' },
    { image: 'https://www.joyalukkas.in/media/wysiwyg/Desktop_Main_banner.jpg', title: 'img3' },
  ];
}

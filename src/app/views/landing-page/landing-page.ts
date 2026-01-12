import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ProductService } from '../../features/products/product.service';
import { Product } from '../../features/products/product.model';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

  isBrowser = false;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  banners: any[] = [];

  categories: string[] = ["Rings", "Necklace", "Bracelet", "Earrings"];

  filters = {
    search: '',
    category: '',
    price: '',
    gender: '',
    sort: ''
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.list(1, 100).subscribe({
      next: (res: any) => {
        const data = res?.data || res;
        this.products = data;
        this.filteredProducts = [...this.products];
      },
      error: err => console.error('Failed to load products', err)
    });
  }

  applyFilters() {
    let data = [...this.products];

    // search
    if (this.filters.search) {
      data = data.filter(p =>
        p.name?.toLowerCase().includes(this.filters.search.toLowerCase())
      );
    }

    // category
    // if (this.filters.category) {
    //   data = data.filter(p => p.category === this.filters.category);
    // }

    // price
    if (this.filters.price) {
      const [min, max] = this.filters.price.split('-').map(Number);
      data = data.filter(p => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // gender
    // if (this.filters.gender) {
    //   data = data.filter(p => p.gender === this.filters.gender);
    // }

    // sort
    if (this.filters.sort === 'low-high') {
      data = data.sort((a, b) => a.price - b.price);
    } else if (this.filters.sort === 'high-low') {
      data = data.sort((a, b) => b.price - a.price);
    }
    // else if (this.filters.sort === 'newest') {
    //   data = data.sort((a, b) =>
    //     new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    //   );
    // }

    this.filteredProducts = data;
  }
}

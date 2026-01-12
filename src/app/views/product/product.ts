import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../features/products/product.service';
import { Product } from '../../features/products/product.model';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.list(1, 50).subscribe((res: any) => {
      this.products = res?.data || res;
    });
  }

  delete(id: number) {
    if (!confirm("Delete product?")) return;

    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }
}

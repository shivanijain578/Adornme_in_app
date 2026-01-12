import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../features/products/product.model';
import { ProductService } from '../../../features/products/product.service';

@Component({
  selector: 'app-view-product',
  standalone: false,
  templateUrl: './view-product.html',
  styleUrl: './view-product.scss'
})
export class ViewProduct implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getById(id).subscribe(res => {
      this.product = res;
    });
  }
}
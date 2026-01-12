import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../features/products/product.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss'
})
export class AddProduct implements OnInit {

  productForm!: FormGroup;
  isEdit = false;
  productId!: number;
  imageFiles: File[] = [];
  imagePreviews: string[] = [];
  imageError: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.buildProductForm();

    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.isEdit = true;
      this.loadProduct();
    }
  }

  buildProductForm() {
    return this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: [''],
      images: ['']
    });
  }

  loadProduct() {
    this.productService.getById(this.productId).subscribe(product => {
      this.productForm.patchValue({
        ...product,
        images: product.images?.join(',')
      });
    });
  }

  onImageSelected(event: any) {
    const files: FileList = event.target.files;
    this.imageError = '';
    this.imageFiles = [];
    this.imagePreviews = [];

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!allowedTypes.includes(file.type)) {
        this.imageError = 'Only JPG, JPEG, PNG files are allowed';
        return;
      }
      this.imageFiles.push(file);

      // Preview image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    if (this.productForm.invalid || this.imageError) return;

    const formData = this.productForm.getRawValue();
    this.imageFiles.forEach(file => {
      formData.append('images', file);
    });

    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.update(+id!, formData).subscribe({
        next: () => this.router.navigate(['/product']),
        error: (err) => console.error(err)
      });
    } else {
      this.productService.create(formData).subscribe({
        next: () => this.router.navigate(['/product']),
        error: (err) => console.error(err)
      });
    }
  }
}
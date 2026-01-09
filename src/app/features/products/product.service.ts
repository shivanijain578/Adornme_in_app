import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product, ProductCreateRequest } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

    private base = `${environment.apiUrl}/products`;

    constructor(private http: HttpClient) { }

    create(payload: ProductCreateRequest) {
        return this.http.post(this.base, payload);
    }

    update(id: number, payload: Partial<ProductCreateRequest>) {
        return this.http.put(`${this.base}/${id}`, payload);
    }

    delete(id: number) {
        return this.http.delete(`${this.base}/${id}`);
    }

    getById(id: number) {
        return this.http.get<Product>(`${this.base}/${id}`);
    }

    list(page = 1, limit = 10) {
        return this.http.get(`${this.base}?page=${page}&limit=${limit}`);
    }
}

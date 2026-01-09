import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class CartService {

    private base = `${environment.apiUrl}/cart`;

    constructor(private http: HttpClient) { }

    getCart() {
        return this.http.get(this.base);
    }

    addItem(productId: number, quantity: number) {
        return this.http.post(this.base, { productId, quantity });
    }

    updateItem(productId: number, quantity: number) {
        return this.http.put(this.base, { productId, quantity });
    }

    clear() {
        return this.http.delete(this.base);
    }
}

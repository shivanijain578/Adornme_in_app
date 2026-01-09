import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class OrderService {

    private base = `${environment.apiUrl}/orders`;

    constructor(private http: HttpClient) { }

    list(page = 1, limit = 10) {
        return this.http.get(`${this.base}?page=${page}&limit=${limit}`);
    }

    getById(id: number) {
        return this.http.get(`${this.base}/${id}`);
    }

    placeOrder(payload: any) {
        return this.http.post(this.base, payload);
    }
}

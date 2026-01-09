import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ShippingService {

    private base = `${environment.apiUrl}/shipping`;

    constructor(private http: HttpClient) { }

    listAddresses() {
        return this.http.get(`${this.base}/addresses`);
    }

    addAddress(payload: any) {
        return this.http.post(`${this.base}/addresses`, payload);
    }

    updateAddress(id: number, payload: any) {
        return this.http.put(`${this.base}/addresses/${id}`, payload);
    }

    deleteAddress(id: number) {
        return this.http.delete(`${this.base}/addresses/${id}`);
    }

    shippingOptions() {
        return this.http.get(`${this.base}/options`);
    }

    track(orderId: number) {
        return this.http.get(`${this.base}/track/${orderId}`);
    }
}

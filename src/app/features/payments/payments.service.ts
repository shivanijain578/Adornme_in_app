import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class PaymentService {

    private base = `${environment.apiUrl}/payments`;

    constructor(private http: HttpClient) { }

    initiate(payload: any) {
        return this.http.post(`${this.base}/initiate`, payload);
    }

    confirm(id: string, payload: any) {
        return this.http.post(`${this.base}/${id}/confirm`, payload);
    }

    refund(id: string, payload: any) {
        return this.http.post(`${this.base}/${id}/refund`, payload);
    }
}

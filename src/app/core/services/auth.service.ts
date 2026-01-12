import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(data: { email: string, password: string }): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, data);
    }

    register(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/register`, data);
    }

    forgotPassword(data: { email: string }): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/forgot-password`, data);
    }

    resetPassword(data: { token: string, newPassword: string }): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/reset-password`, data);
    }

    saveUserSession(token: string, role: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);   // e.g. user-admin , user-readonly
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    isAdmin(): boolean {
        const role = localStorage.getItem('role');
        return role === 'user-admin' || role === 'service-admin';
    }

    getRole(): string | null {
        return localStorage.getItem('role');
    }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    clear() {
        localStorage.clear();
    }
}

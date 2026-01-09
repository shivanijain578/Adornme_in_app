import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Auth {

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    login(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem('user');
    }

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    getRole(): string | null {
        return this.getUser()?.role || null;
    }

    isAdmin(): boolean {
        return this.getRole() === 'ADMIN';
    }

    isUser(): boolean {
        return this.getRole() === 'USER';
    }
}

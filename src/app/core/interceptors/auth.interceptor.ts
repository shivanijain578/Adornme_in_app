import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }

    intercept(req: any, next: any) {
        const token = this.tokenService.getToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req);
    }
}

import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { URL_AUTH_LOGIN, URL_AUTH_REFRESH } from '@core/services/urls-api';
import { AuthService } from '@features/auth/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    private readonly _authService = inject(AuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('******API INTERCEPTOR*****')
       

        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');        

        if(req.url === URL_AUTH_LOGIN){
            return next.handle(req)
        }

        if(req.url === URL_AUTH_REFRESH) {
            const requestClone = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${refreshToken}`)
            });
            return next.handle(requestClone)
        }

        if(this._authService.isRefreshing) {
            console.log('****REFRESH TOKEN EN PROCESO, SE CANCELA LA PETICION****');
            return EMPTY
        }
        
        if(accessToken) {
            const requestClone = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
            });
            return next.handle(requestClone)
        }

        return next.handle(req);
    }
} 
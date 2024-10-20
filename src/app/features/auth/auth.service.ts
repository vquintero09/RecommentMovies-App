import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IReponseSingIn, IResponseRefreshToken, IUser } from '@core/interfaces/user-api.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {URL_AUTH_LOGIN, URL_AUTH_REFRESH} from '@core/services/urls-api'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private readonly _CREATE_URL = 'http://localhost:3000/movies/register';
   private readonly _HTTP = inject(HttpClient);
   private readonly _router = inject(Router);
   private googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
   private redirectUrl = 'http://localhost:4200/auth/callback';
   private clientId = '217026584906-44qnh9i0qsgeffaprr4gqopbrdn7n9t8.apps.googleusercontent.com';

   private _isRefreshing = false;

   get isRefreshing () {
      return this._isRefreshing;
   };
   set isRefreshing(value) {
      this._isRefreshing = value;
   }

   login(user: IUser): Observable<IReponseSingIn>{
      return this._HTTP.post<IReponseSingIn>(URL_AUTH_LOGIN, user).pipe(tap((res) => {
         localStorage.setItem('accessToken', res.accessToken);
         localStorage.setItem('refreshToken', res.refreshToken)
      }))
   };

   loginWithGoogle(): void {
      const authUrl = `${this.googleAuthUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUrl}&response_type=code&scope=email profile&access_type=offline`;
      window.location.href = authUrl
   }

   refreshToken(): Observable<IResponseRefreshToken> {
      return this._HTTP.post<IResponseRefreshToken>(URL_AUTH_REFRESH, '').pipe(tap((res) => {
         localStorage.setItem('newAccessToken', res.newAccessToken)
      }));
   }

   logout(): void {
      localStorage.removeItem('token');
      this._router.navigateByUrl('auth')
   }

   create(user: IUser): Observable<string> {
      return this._HTTP.post<any>(this._CREATE_URL, user).pipe(
         catchError(this.handleErrorRegister)
      )
   }
  
  private handleErrorRegister(error: HttpErrorResponse){
    let  errorMessage = 'Ocurrio un error';
    if(error.status === 400) {
      errorMessage = 'username already exists';
    }
    return throwError(() => new Error(errorMessage))
  }
  constructor() { }
}

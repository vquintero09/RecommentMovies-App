import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, concatMap, EMPTY, finalize, Observable, throwError } from 'rxjs';
import { AuthService } from '@features/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorApiInterceptor implements HttpInterceptor {
   private readonly _authService = inject(AuthService);
   private readonly _router = inject(Router);
   intercept(req: HttpRequest<any>, next: HttpHandler): any{
      console.log('*******ErrorApiInterceptor*********');
      
      return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
         let  errorMessage = '';
         if(error.status === HttpStatusCode.BadRequest){
            errorMessage = `${error.error}`;
         };

         if(error.status === HttpStatusCode.Unauthorized){
            console.log('****INICIANDO PROCESO DE REFRESH TOKEN****');
              // Verifica si ya se está intentando refrescar el token
              if (this._authService.isRefreshing) {
               return throwError(() => new Error('Ya se está refrescando el token.'));
            }
            this._authService.isRefreshing = true;

            return this._authService.refreshToken().pipe(
               finalize(() => (this._authService.isRefreshing = false)),
               concatMap((response) => {
                  console.log('****TOKEN ACTUALIZADO****');
                  const requestClone = req.clone({
                     headers: req.headers.set('Autorizathion', `Bearer ${response.newAccessToken}`)
                  });
                  return next.handle(requestClone);
               }),
               catchError(() => {
                  console.log('****ERROR EN EL REFRESH TOKEN****');
                  this._router.navigateByUrl('/auth'); 
                  return EMPTY; 
               })
            );
         };
         return throwError(() => new Error(errorMessage));
      }))
   }
}



        

     

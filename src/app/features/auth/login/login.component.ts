import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
   private readonly _formBuilder = inject(NonNullableFormBuilder);
   private readonly _authService = inject(AuthService);
   private readonly _router = inject(Router)
   private _snackBar = inject(MatSnackBar)

   errorMessage:string = '';
   submitted: boolean = false;

   loginForm = this._formBuilder.group({
      username: ['Vicodev09', Validators.required],
      password: ['chocolate*22', Validators.required]
   });

   login(): void{
      if(this.loginForm.valid) {
         const { username, password } = this.loginForm.getRawValue();
         this._authService.login({username: username, password: password}).subscribe({
            next: () => this._router.navigateByUrl('/'),
            error: (error) => {
               this.errorMessage = error;
               this._snackBar.open(this.errorMessage, '' ,{ horizontalPosition:'center', verticalPosition: 'bottom', duration: 5*1000 })
            } 
         })
      } 
   };

   hasError(controlName: string, errorName: string): boolean {
      const control = this.loginForm.get(controlName);
      return control ? control.hasError(errorName) : false;
   };

   onSubmit(): void {
      this.submitted = true;  
      this.login()
   }
}

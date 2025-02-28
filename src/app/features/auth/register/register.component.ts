import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { customPasswordValidators } from './register-custom-validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  valid: boolean = true;
  errorMessage!: string;
  
  constructor(){
    console.log(this.valid);  
  }

  formRegister = this._formBuilder.nonNullable.group({
    username: ['', Validators.required],
    password: ['', [customPasswordValidators ,Validators.required]]
  });

  clickRegister(){
    if(this.formRegister.valid) {
      const { username, password } = this.formRegister.getRawValue();
      this._authService.create({username: username, password: password}).subscribe({
        next: () => this._router.navigateByUrl('/'),
        error: (error) => {
          this.errorMessage = error;
          this._snackBar.open(this.errorMessage, '', {horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5*1000})
          
        }
      })
    }
  };

	loginWithGoogle(){
		this._authService.loginWithGoogle()
	}

 // getter ans setters
  get usernameField(): FormControl {
    return this.formRegister.controls.username
  }

  get passwordField(): FormControl {
    return this.formRegister.controls.password
  }
 
}

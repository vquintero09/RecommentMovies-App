import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { customPasswordValidators } from './register-custom-validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    private readonly _formBuilder = inject(FormBuilder);
    private readonly _authService = inject(AuthService);
    private readonly _router = inject(Router)

    valid: boolean = true;
    errorMessage!: string;
  
    constructor(){
        console.log(this.valid);  
    }

    formRegister = this._formBuilder.nonNullable.group({
        username: ['', Validators.required],
        emailOrNumber: ['', [Validators.required, Validators.email]],
        password: ['', [customPasswordValidators ,Validators.required]]
    });

    clickRegister(){
        // const username = this.formRegister.controls.username.value;
        // console.log(this.usernameField.hasError('required'));
        // if(this.usernameField.hasError('required')){
        //     this.valid = false;
        //     console.log(this.usernameField.hasError('required'));
        // };

        // if(this.usernameField.dirty){
        //     this.valid = true
        // };
        if(this.formRegister.valid) {
            const { username, password } = this.formRegister.getRawValue();
            this._authService.create({username: username, password: password}).subscribe((reponse) => {
                this._router.navigateByUrl('/')
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

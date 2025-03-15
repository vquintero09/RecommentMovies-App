import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes, RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { MatError, MatInput } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel, } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

export const routes: Routes = [
   {
      path: '',
      component: AuthComponent,
      children: [
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'register',
            component: RegisterComponent
         },
         {
            path: 'callback',
            component: AuthCallbackComponent
         },
         {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
         
         }
      ]
   }
]

@NgModule({
   imports: [
      RouterModule.forChild(routes), 
      RouterOutlet,
      FormsModule, 
      MatError, 
      MatCardModule, 
      ReactiveFormsModule, 
      MatFormFieldModule, 
      MatInput, 
      MatLabel,  
      CommonModule, 
      MatButtonModule, 
      RouterLink,
      AsyncPipe
   ],
  exports: [],
  declarations: [
   AuthComponent,
   LoginComponent,
   RegisterComponent,
   AuthCallbackComponent
  ],
  providers: [],
})
export class AuthModule { }

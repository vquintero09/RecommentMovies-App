import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { ReactiveFormsModule } from "@angular/forms"
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { CoreModule } from "@core/core.module";
import { MatCardModule } from "@angular/material/card";

describe('loginComponent', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ 
            ReactiveFormsModule,
            RouterTestingModule,
            CoreModule,
            MatCardModule
         ],
         declarations: [
            LoginComponent
         ],
      }).compileComponents() 
   });

   it('Should create the loginComponent', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const appLogin = fixture.componentInstance;
      expect(appLogin).toBeTruthy();
   })

   it(`Should validate that the "name" field is required`, () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const login = fixture.componentInstance;
      const controlName = login.loginForm.get('username');
      controlName?.setValue('');
      expect(controlName?.valid).toBeFalse();
   })
})
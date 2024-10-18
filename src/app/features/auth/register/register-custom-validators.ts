import { AbstractControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

//Esta expresión regular validará si el texto contiene al menos una minuscula, mayuscula, número, symbolo y que la longitud sea mayor o igual a 8
const patternPassword = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}');

/**
 * Esta función la usaremos para el campo de "password"
 * @param control
 * @returns
*/

export const customPasswordValidators = (control: AbstractControl): ValidationErrors | null => {

  const value = control.value;

  if(!patternPassword.test(value)){
    return { customPasswordValidators: true}
  }

  return null
};

/**
 * Esta función la usaremos para realizar la validación cruzada entre los campos "password" y "confirmPassword"
 * @param formGroupControl
 * @returns
 */

export const crossPasswordMatchingValidatior: ValidatorFn = (FormGroupControl: AbstractControl<{password: string, confirmPassword: string}>): ValidationErrors | null => {
  const password = FormGroupControl.value.password;
  const confirmPassword = FormGroupControl.value.confirmPassword;

  return password !== confirmPassword ? { crossConfirmPasswordError: true} : null
};

export class PasswordStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl, form: FormGroupDirective | NgForm): boolean {
    
    if (!control || !control.parent) {
			return false;
		}
    return control.parent.hasError('crossConfirmPasswordError');
  }
}

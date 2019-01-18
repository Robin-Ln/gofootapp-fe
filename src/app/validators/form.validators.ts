import { FormGroup, ValidatorFn, ValidationErrors, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirm = control.get('confirmation');

    return password && confirm && password.value === confirm.value ? null : { 'confirmPassword': true };
};


export class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return control.dirty && form.invalid;
    }
}

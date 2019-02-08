import { ErrorStateMatcher } from '@angular/material';
import { InscriptionService } from '../service/inscription/inscription.service';
import { Observable } from 'rxjs';
import {
    ValidatorFn,
    FormGroup,
    ValidationErrors,
    AbstractControl,
    AsyncValidatorFn,
    FormControl,
    FormGroupDirective,
    NgForm
} from '@angular/forms';


export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirm = control.get('confirmation');

    return password && confirm && password.value === confirm.value ? null : { 'confirmPassword': true };
};


export function uniqueMailValidator(inscriptionService: InscriptionService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return inscriptionService.mailExist(control.value).then(
        res => {
          return (res) ? {'uniqueMail': true} : null;
        });
    };
}


export function MustMatch(controlName: string, matchingControlName: string) {
return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

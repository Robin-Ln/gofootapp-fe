import { AbstractControl } from '@angular/forms';
import { InscriptionService } from '../service/inscription/inscription.service';


export class MailExistValidator {

    constructor(private inscriptionService: InscriptionService) {}

    async validateEmailNotTaken(control: AbstractControl) {

        const res: boolean = await this.inscriptionService.mailExist(control.value);

        return res ? null : { emailTaken: true };
    }
}

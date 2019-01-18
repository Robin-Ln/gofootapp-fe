import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { 
  CrossFieldErrorMatcher,
  confirmPasswordValidator,
  uniqueMailValidator } from 'src/app/validators/form.validators';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  errorMatcher: CrossFieldErrorMatcher;
  submitted = false;
  hide = true;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService
  ) { }

  ngOnInit(): void {

    this.errorMatcher = new CrossFieldErrorMatcher();

    this.inscriptionForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email,
        ], [
          uniqueMailValidator(this.inscriptionService)
        ]
      ],
      nom: ['', [
          Validators.required,
        ]
      ],
      prenom: ['', [
          Validators.required,
        ]
      ],
      telephone: ['', [
          Validators.required,
        ]
      ],
      password: ['', [
          Validators.required,
        ]
      ],
      confirmation: ['', [
          Validators.required,
        ]
      ]
    }, { validator: confirmPasswordValidator });

  }

  onSubmit() {

    //console.log(this.inscriptionForm);
    //console.log(this.inscriptionForm.invalid);

    this.inscriptionService.test();

    /*
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.connexionForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
    */
  }

}

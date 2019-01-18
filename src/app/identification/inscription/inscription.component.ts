import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CrossFieldErrorMatcher, confirmPasswordValidator } from 'src/app/validators/form.validators';


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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.errorMatcher = new CrossFieldErrorMatcher();

    this.inscriptionForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
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

    console.log(this.inscriptionForm);
    console.log(this.inscriptionForm.invalid);

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

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import {
  uniqueMailValidator,
  MustMatch} from 'src/app/validators/form.validators';
import { InscriptionService } from 'src/app/service/inscription/inscription.service';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  submitted = false;
  hide = true;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private inscriptionService: InscriptionService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()){
      this.router.navigate(['/club']);
    }

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
          Validators.pattern('[0-9]{10}')
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
    }, { validator: MustMatch('password', 'confirmation') } );

  }

  async onSubmit() {
    this.loading = true;

    // stop here if form is invalid
    if (this.inscriptionForm.invalid) {
        this.loading = false;
        return;
    }

    // inscription
    const utilisateur: Utilisateur = this.inscriptionForm.value;
    const res: Boolean = await this.inscriptionService.inscription(utilisateur);
    if (res) {
      this.router.navigate(['/connexion']);
    }

    // Afficher un message d'erreur dans un cadre rouge
    console.log(res);
    this.loading = false;
  }

}

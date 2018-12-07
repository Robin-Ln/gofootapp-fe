import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ConnexionService } from 'src/app/service/connexion/connexion.service';
import { Connexion } from 'src/app/modele/connexion';
import { Utilisateur } from 'src/app/modele/utilisateur';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  hide = true;
  loading = false;

  constructor(
      private formBuilder: FormBuilder,
      private connexionService: ConnexionService
    ) { }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
        ]
      ]
    });
  }

  get form() { return this.connexionForm.controls; }

  async onSubmit() {
    this.loading = true;

    // stop here if form is invalid
    if (this.connexionForm.invalid) {
        return;
    }

    const connexion: Connexion = this.connexionForm.value;
    const utilisateur: Utilisateur = await this.connexionService.connexion(connexion);
    console.log(utilisateur);

    this.loading = false;

  }

}

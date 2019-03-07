import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Login } from 'src/app/modele/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { CookieService } from 'ng2-cookies';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  hide: Boolean = true;
  showError: Boolean = false;
  loading: Boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private router: Router,
      private cookieService: CookieService,
    ) { }

  ngOnInit(): void {

    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/club']);
    }

    this.connexionForm = this.formBuilder.group({
      mail: ['', [
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
        this.loading = false;
        return;
    }

    // verification du login sur le serveur
    const login: Login = this.connexionForm.value;
    const res: Boolean = await this.loginService.connexion(login);
    if (res) {
      this.cookieService.set('isLoggedIn', 'true');
      this.loginService.login = login;
      this.router.navigate(['/club']);
    }

    // Afficher un message d'erreur dans un cadre rouge
    console.log(res);
    this.loading = false;
    this.showError = true;
  }

}

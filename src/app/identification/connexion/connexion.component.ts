import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  submitted = false;
  hide = true;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.connexionForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
  }

}

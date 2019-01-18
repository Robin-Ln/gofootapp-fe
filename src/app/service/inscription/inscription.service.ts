import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Configuration } from 'src/app/modele/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }
}

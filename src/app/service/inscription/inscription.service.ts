import { Injectable } from '@angular/core';
import { ConfigurationService } from '../config/configuration.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Configuration } from 'src/app/modele/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  config: Configuration;

  constructor(private configService: ConfigurationService, private httpClient: HttpClient) {
    this.configService.getConfig()
      .subscribe((data: Configuration) => {
        this.config = data;
      });
  }
}

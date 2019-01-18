import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'src/app/modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }

  public async mailExist(mail: String): Promise<boolean> {
    return this.httpClient
      .get<Boolean>(this.config.serveurUrl + this.config.inscriptionUrl + '/' + mail)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('InscriptionService error ', error);
        return false;
      });
  }

  public async inscription(utilisateur: Utilisateur): Promise<boolean> {
    return this.httpClient
      .post<Boolean>(this.config.serveurUrl + this.config.inscriptionUrl, utilisateur)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('InscriptionService error ', error);
        return false;
      });
  }
}

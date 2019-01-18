import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }

  public async test() {
    console.log('test');
  }


  public async mailExist(mail: String): Promise<boolean> {
    return this.httpClient
      .get<Boolean>(this.config.serveurUrl + this.config.loginUrl + '/' + mail)
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

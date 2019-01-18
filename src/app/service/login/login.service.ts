import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/modele/login';
import { Configuration } from 'src/app/modele/configuration/configuration';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean;
  login: Login;
  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }

  public async connexion(login: Login): Promise<boolean> {
    return this.httpClient
      .post<Boolean>(this.config.serveurUrl + this.config.loginUrl, login)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }

  public async checkLogedIn(): Promise<Boolean> {
    return this.httpClient
      .put<Boolean>(this.config.serveurUrl + this.config.loginUrl + '/' + this.login.mail, null)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }
}

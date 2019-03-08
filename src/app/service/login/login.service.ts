import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/modele/login';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { CookieService } from 'ng2-cookies';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login;
  config: Configuration;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
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
    const mail: String = this.cookieService.get('user');
    return this.httpClient
      .put<Boolean>(this.config.serveurUrl + this.config.loginUrl + '/' + mail, null)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }

  public isLoggedIn(): Boolean {
    return this.cookieService.get('isLoggedIn') === 'true' ? true : false;
  }

  public deconnexion(): Boolean {
    this.cookieService.set('isLoggedIn', 'false');
    return false;
  }
}

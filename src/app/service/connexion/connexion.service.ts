import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from 'src/app/modele/login';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  redirectUrl: string;

  isLoggedIn: boolean;

  login: Login;

  constructor(private httpClient: HttpClient) {}

  public async connexion(login: Login): Promise<boolean> {
    return this.httpClient
      .post<Boolean>('http://localhost:8080/be/connexion', login)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }

  public async checkToken(): Promise<Boolean> {
    const params = new HttpParams().set('token', this.login.token);
    return this.httpClient
      .get<Boolean>('http://localhost:8080/be/connexion', {params})
      .toPromise()
      .then((result: Boolean) => {
        return result;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }
}

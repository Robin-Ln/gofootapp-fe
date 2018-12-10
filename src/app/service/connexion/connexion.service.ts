import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/modele/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Connexion } from 'src/app/modele/connexion';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private httpClient: HttpClient) {}

  public async connexion(connexion: Connexion): Promise<any> {
    return this.httpClient
      .post<Boolean>('http://localhost/be/connexion', connexion)
      .toPromise()
      .then((result: any) => {
        if (result) {
          const res: Boolean = result;
          return res;
        }
        return false;
      })
      .catch(error => {
        console.error('ConnexionService error ', error);
        return false;
      });
  }
}

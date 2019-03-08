import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { HttpClient } from '@angular/common/http';
import { IdClubEntraineur } from 'src/app/modele/IdClubEntraineur';
import { joueur } from 'src/app/modele/joueur';

@Injectable({
  providedIn: 'root'
})
export class GestionEquipeService {

  private config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration;
  }
  
  public async getClubUtilisateur(mail: String) : Promise<IdClubEntraineur> {
    return this.httpClient
      .post<IdClubEntraineur>(this.config.serveurUrl + this.config.idclubentraineurUrl, mail)
      .toPromise()
      .then((result: IdClubEntraineur) => {
        return result;
      })
      .catch(error => {
        console.error('GestionEquipeService error ', error);
        return null;
      });
  }

  public async getListjoueur(id: number) {
    return this.httpClient
      .post<joueur[]>(this.config.serveurUrl + this.config.listeJoueurClubUrl, id)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('GestionEquipeService error ', error);
        return null;
      });
  }

  public async getListjoueurTerrain(id: number) {
    return this.httpClient
      .post<joueur[]>(this.config.serveurUrl + this.config.listeJoueurTerrainUrl, id)
      .toPromise()
      .then((result: any) => {
        return result;
      })
      .catch(error => {
        console.error('GestionEquipeService error ', error);
        return null;
      });
  }

}

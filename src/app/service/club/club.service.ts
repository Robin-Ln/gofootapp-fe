import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { Club } from 'src/app/modele/club';
<<<<<<< HEAD
import { InscriptionClub } from 'src/app/modele/inscriptionclub';
import { NouveauClub } from 'src/app/modele/nouveauClub';
=======
import { InscriptionAuClub } from 'src/app/modele/InscriptionAuClub';
>>>>>>> branch 'master' of https://github.com/Robin-Ln/gofootapp-fe.git

@Injectable({
  providedIn: 'root'
})
export class ClubService  {

  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }

  public getListeClubNonAdherer(id: Number) {
    return this.httpClient
      .post<Club[]>(this.config.serveurUrl + this.config.clubNonAdhererUrl, id);
  }

  public getListeClubAdherer(id: Number) {
    return this.httpClient
      .post<Club[]>(this.config.serveurUrl + this.config.clubAdhererUrl, id);
  }

<<<<<<< HEAD
  public  async rejoindreClub(inscriptionClub :InscriptionClub){
=======
  public rejoindreClub(inscriptionClub: InscriptionAuClub) {
>>>>>>> branch 'master' of https://github.com/Robin-Ln/gofootapp-fe.git
    return this.httpClient
<<<<<<< HEAD
      .post<Boolean>(this.config.serveurUrl + this.config.rejoindreClubUrl, inscriptionClub)
      .toPromise()
      .then((result: Boolean) => {
        return result;
      })
      .catch(error => {
        console.error('InscriptionService error ', error);
        return false;
      }); 
=======
      .post<Boolean>(this.config.serveurUrl + this.config.rejoindreClubUrl, inscriptionClub);
>>>>>>> branch 'master' of https://github.com/Robin-Ln/gofootapp-fe.git
  }

  public async creeNouveauClub(nouveauClub : NouveauClub){
    return this.httpClient
    .post<Boolean>(this.config.serveurUrl + this.config.rejoindreClubUrl, nouveauClub)
    .toPromise()
    .then((result: Boolean) => {
      return result;
    })
    .catch(error => {
      console.error('InscriptionService error ', error);
      return false;
    }); 
  }

  
}

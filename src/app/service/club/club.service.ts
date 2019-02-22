import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { Club } from 'src/app/modele/club';
import { InscriptionClub } from 'src/app/modele/inscriptionclub';

@Injectable({
  providedIn: 'root'
})
export class ClubService  {

  config: Configuration;

  constructor(private httpClient: HttpClient) {
    this.config = new Configuration();
  }
  
  public getListeClubNonAdherer(id : Number){
    return this.httpClient
      .post<Club[]>(this.config.serveurUrl+this.config.clubNonAdhererUrl,id);      
  }

  public getListeClubAdherer(id : Number){
    return this.httpClient
      .post<Club[]>(this.config.serveurUrl+this.config.clubAdhererUrl,id);      
  }

  public rejoindreClub(inscriptionClub :InscriptionClub){
    return this.httpClient
      .post<Boolean>(this.config.serveurUrl+this.config.rejoindreClubUrl,inscriptionClub);      
  }
}

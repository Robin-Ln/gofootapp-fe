import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/modele/configuration/configuration';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'calendar-utils';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(
    private config: Configuration,
    private httpClient: HttpClient
    ) {}


  public async getEvenements(): Promise<CalendarEvent[]> {
    return this.httpClient
      .get<CalendarEvent[]>(this.config.serveurUrl + this.config.planningEvenementUrl)
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

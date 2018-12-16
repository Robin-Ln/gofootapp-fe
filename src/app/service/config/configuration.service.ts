import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  configUrl = 'assets/config.json';

  constructor(private httpClient: HttpClient) { }

  getConfig() {
    return this.httpClient.get(this.configUrl);
  }
}

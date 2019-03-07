import { Component } from '@angular/core';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gofootapp-fe';
  
   constructor(
    private loginService: LoginService
  ) {}
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login/login.service';
import { CookieService } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkLogin();
  }

  checkLogin(): boolean {
    // ne c'est jamais connecter

    const isLoggedIn: Boolean = this.cookieService.get('isLoggedIn') === 'true' ? true : false;

    if (!isLoggedIn) {
      this.router.navigate(['/connexion']);
      this.cookieService.set('isLoggedIn', 'false');
      return false;
    }

    // verification de la date
    if (!this.loginService.checkLogedIn()) {
      this.router.navigate(['/connexion']);
      this.cookieService.set('isLoggedIn', 'false');
      return false;
    }

    this.cookieService.set('isLoggedIn', 'true');
    return true;
  }
}

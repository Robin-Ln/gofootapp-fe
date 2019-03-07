import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkLogin();
  }

  checkLogin(): boolean {
    // ne c'est jamais connecter
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['/connexion']);
      return false;
    }

    // verification de la date
    if (!this.loginService.checkLogedIn()) {
      this.router.navigate(['/connexion']);
      this.loginService.isLoggedIn = false;
      return false;
    }

    return true;
  }
}

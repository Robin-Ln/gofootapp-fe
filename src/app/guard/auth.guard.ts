import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../service/connexion/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private connexionService: ConnexionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checkLogin();
  }

  checkLogin(): boolean {
    // ne c'est jamais connecter
    if (!this.connexionService.isLoggedIn) {
      this.router.navigate(['/connexion']);
      return false;
    }

    // verification du token
    if (!this.connexionService.checkToken()) {
      this.router.navigate(['/connexion']);
      return false;
    }

    return false;
  }
}

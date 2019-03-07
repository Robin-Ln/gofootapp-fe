import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';
import { AuthGuard } from './guard/auth.guard';
import { PagePlanningComponent } from './pages/page-planning/page-planning.component';
import { GestionequipeComponent } from './gestionequipe/gestionequipe.component';
import { ClubsComponent } from './page/clubs/clubs.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'planning', component: PagePlanningComponent, canActivate: [AuthGuard]},
  { path: 'club', component: ClubsComponent, canActivate: [AuthGuard]},
  { path: 'gestionequipe', component: GestionequipeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';
import { AuthGuard } from './guard/auth.guard';
import { PagePlanningComponent } from './pages/page-planning/page-planning.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent},
  { path: 'planning', component: PagePlanningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

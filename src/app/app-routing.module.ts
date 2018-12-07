import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscription',
    pathMatch: 'full'
  },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

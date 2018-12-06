import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AuthPage',
    pathMatch: 'full'
  },
  { path: 'AuthPage', component: AuthPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

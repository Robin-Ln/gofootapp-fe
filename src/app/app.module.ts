import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login/login.service';
import { InscriptionService } from './service/inscription/inscription.service';
import { PagePlanningComponent } from './pages/page-planning/page-planning.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    PagePlanningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Material animation
    BrowserAnimationsModule,
    // Material componet
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    // Flex Layout
    FlexLayoutModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule,
    // Calendar
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    LoginService,
    InscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

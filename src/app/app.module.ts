import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login/login.service';
import { ConfigurationService } from './service/config/configuration.service';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent
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
    // Flex Layout
    FlexLayoutModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Http
    HttpClientModule
  ],
  providers: [
    ConfigurationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

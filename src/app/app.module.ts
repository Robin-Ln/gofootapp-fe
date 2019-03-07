import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MaterialModule} from './gestionequipe/gestionequipematerials';

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
  MatGridListModule,
  MatDialogModule,
  MatTabsModule,
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './identification/connexion/connexion.component';
import { InscriptionComponent } from './identification/inscription/inscription.component';
import { GestionequipeComponent } from './gestionequipe/gestionequipe.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login/login.service';
import { InscriptionService } from './service/inscription/inscription.service';
import { PagePlanningComponent } from './pages/page-planning/page-planning.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { EventDialogComponent } from './dialogs/event-dialog/event-dialog.component';
import { ClubService } from './service/club/club.service';
import { ClubsComponent } from './page/clubs/clubs.component';

import { CookieService } from 'ng2-cookies';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    PagePlanningComponent,
    EventDialogComponent,
    ClubsComponent,
    GestionequipeComponent,
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
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
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
    InscriptionService,
    ClubService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventDialogComponent]
})
export class AppModule { }

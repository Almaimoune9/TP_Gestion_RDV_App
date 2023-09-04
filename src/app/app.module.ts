import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal'; // Assurez-vous que ngx-bootstrap est correctement installé

// Importez les composants de ngx-bootstrap que vous utilisez
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Utilisé le faux backend
import { fakeBackendProvider } from './_helpers';

import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { CalendrierRendezVousComponent } from './calendrier-rendez-vous/calendrier-rendez-vous.component';
import { CreationRendezVousComponent } from './creation-rendez-vous/creation-rendez-vous.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherDetailRendezVousComponent } from './afficher-detail-rendez-vous/afficher-detail-rendez-vous.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StatutComponent } from './statut/statut.component';
import { RendezVousMedecinComponent } from './rendez-vous-medecin/rendez-vous-medecin.component';
import { DonnerRendezVousComponent } from './donner-rendez-vous/donner-rendez-vous.component';
import { MaterialModule } from 'src/material.mode'; // Assurez-vous que ce chemin est correct
import { ConnexionMedecinComponent } from './connexion-medecin/connexion-medecin.component';
import { ListeRdvComponent } from './liste-rdv/liste-rdv.component';
import { LoginComponent, RegisterComponent } from './compte';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';

@NgModule({
  declarations: [
    AppComponent,
    AjoutMedecinComponent,
    ListePatientComponent,
    ListeMedecinComponent,
    CalendrierRendezVousComponent,
    CreationRendezVousComponent,
    AjoutPatientComponent,
    AccueilComponent,
    AfficherDetailRendezVousComponent,
    ConnexionComponent,
    StatutComponent,
    RendezVousMedecinComponent,
    DonnerRendezVousComponent,
    ConnexionMedecinComponent,
    ListeRdvComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
  ],
  exports: [MatDialogModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    StatutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

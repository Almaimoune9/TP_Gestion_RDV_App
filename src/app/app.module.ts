import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutPatientComponent } from './modules/general/ajout-patient/ajout-patient.component';
import { AjoutMedecinComponent } from './modules/general/ajout-medecin/ajout-medecin.component';
import { ListePatientComponent } from './modules/general/liste-patient/liste-patient.component';
import { ListeMedecinComponent } from './modules/general/liste-medecin/liste-medecin.component';
import { CalendrierRendezVousComponent } from './modules/general/calendrier-rendez-vous/calendrier-rendez-vous.component';
import { CreationRendezVousComponent } from './modules/general/creation-rendez-vous/creation-rendez-vous.component';
import { DetailsRendezVousComponent } from './modules/general/details-rendez-vous/details-rendez-vous.component';
import { AccueilComponent } from './modules/general/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutPatientComponent,
    AjoutMedecinComponent,
    ListePatientComponent,
    ListeMedecinComponent,
    CalendrierRendezVousComponent,
    CreationRendezVousComponent,
    DetailsRendezVousComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

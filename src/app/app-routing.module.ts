import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { CalendrierRendezVousComponent } from './calendrier-rendez-vous/calendrier-rendez-vous.component';
import { CreationRendezVousComponent } from './creation-rendez-vous/creation-rendez-vous.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AfficherDetailRendezVousComponent } from './afficher-detail-rendez-vous/afficher-detail-rendez-vous.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { StatutComponent } from './statut/statut.component';


const routes: Routes = [


  {path:'', component:AccueilComponent},
  {path :'Ajouter_Medecin', component : AjoutMedecinComponent},
  {path : 'Ajouter_Patient', component: AjoutPatientComponent},
  {path: 'Liste_Medecin', component: ListeMedecinComponent},
  {path: 'Liste_Patient',component:ListePatientComponent},
  {path: 'Mes_rendez_vous', component: CalendrierRendezVousComponent},
  {path:'Creation_rendez_vous', component: CreationRendezVousComponent},
  {path:'Detail_Rendez_vous',component:AfficherDetailRendezVousComponent},
  {path:"Connexion", component: ConnexionComponent},
  {path: 'Statut', component: StatutComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }



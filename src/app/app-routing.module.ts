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


const routes: Routes = [


  {path:'', component:AccueilComponent},
  {path :'Ajouter Medecin', component : AjoutMedecinComponent},
  {path : 'Ajouter Patient', component: AjoutPatientComponent},
  {path: 'Liste Medecin', component: ListeMedecinComponent},
  {path: 'Liste Patient',component:ListePatientComponent},
  {path: 'Mes rendez-vous', component: CalendrierRendezVousComponent},
  {path:'Creation rendez-vous', component: CreationRendezVousComponent},
  {path:'Detail Rendez-vous',component:AfficherDetailRendezVousComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }



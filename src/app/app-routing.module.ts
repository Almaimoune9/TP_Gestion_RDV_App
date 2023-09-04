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
import { RendezVousMedecinComponent } from './rendez-vous-medecin/rendez-vous-medecin.component';
import { DonnerRendezVousComponent } from './donner-rendez-vous/donner-rendez-vous.component';
import { ConnexionMedecinComponent } from './connexion-medecin/connexion-medecin.component';
import { RegisterComponent, LoginComponent } from './compte';
import { AuthGuard } from './_helpers';
const medecinsModule = () => import('./medecins/medecins.module').then(x => x.MedecinsModule);

const routes: Routes = [

  {path:'', component:AccueilComponent, canActivate: [AuthGuard]},
  { path: 'medecins', loadChildren: medecinsModule, canActivate: [AuthGuard] },
  {path :'Ajouter_Medecin', component : AjoutMedecinComponent},
  {path : 'Ajouter_Patient', component: AjoutPatientComponent},
  {path: 'Liste_Medecin', component: ListeMedecinComponent},
  {path: 'Liste_Patient',component:ListePatientComponent},
  {path: 'Mes_rendez_vous', component: CalendrierRendezVousComponent},
  {path: 'Rendez_vous_medecin', component:RendezVousMedecinComponent},
  {path: 'Donner_rendez_vous', component:DonnerRendezVousComponent},
  {path:'Creation_rendez_vous', component: CreationRendezVousComponent},
  {path:'Detail_Rendez_vous',component:AfficherDetailRendezVousComponent},
  {path:"Connexion", component: ConnexionComponent},
  {path: 'Statut', component: StatutComponent},
  {path: 'compte/login', component:LoginComponent},
  {path: 'compte/register', component: RegisterComponent},

  //Redeirige l'utilisateur sur la page d'accueil dans le cas où l'URL n'existe pas
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }



import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';//pour la redirection
import { CalendarOptions } from '@fullcalendar/core/';
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid'; // important!
// import { Rendezvous } from '../rendezvous';
import { MatDialog } from '@angular/material/dialog';
import { CreationRendezVousComponent } from '../creation-rendez-vous/creation-rendez-vous.component';
import { RdvService } from '../mes_services/rdv.service';
import { rendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-calendrier-rendez-vous',
  templateUrl: './calendrier-rendez-vous.component.html',
  styleUrls: ['./calendrier-rendez-vous.component.css']
})
export class CalendrierRendezVousComponent implements OnInit {

  tableauList:rendezVous[]=[];


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale,

  };

  constructor(private router: Router,private dialogRef:MatDialog,private rdvService:RdvService){

  }
  //================Recuperer la liste des rdv depuis le service==============
  ngOnInit(): void {
    this.tableauList=this.rdvService.getRdv();
  }
  deconnexion(){
    this.router.navigate(['/Connexion']);
  }
//___________________________pour le popup__________________________
  openDialog(){
    this.dialogRef.open(CreationRendezVousComponent);
  }

}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';//pour la redirection
import { CalendarOptions } from '@fullcalendar/core/';
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid'; // important!
import { Rendezvous } from '../rendezvous';
import { MatDialog } from '@angular/material/dialog';
import { CreationRendezVousComponent } from '../creation-rendez-vous/creation-rendez-vous.component';

@Component({
  selector: 'app-calendrier-rendez-vous',
  templateUrl: './calendrier-rendez-vous.component.html',
  styleUrls: ['./calendrier-rendez-vous.component.css']
})
export class CalendrierRendezVousComponent {



  calendarPlugins = [dayGridPlugin]; // important!
  tableau: Rendezvous[] = [];
  event1 = new Rendezvous("Evénément 1","2023-08-29");
  // service.getRendezList [
  //   { title: 'event 1', date: '2023-08-29' },
  //   { title: 'event 2', date: '2023-08-30' }
  // ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale,
    events: this.tableau
  };
  
  constructor(private router: Router,private dialogRef:MatDialog){
    this.tableau.push(this.event1);
  }
  deconnexion(){
    this.router.navigate(['/Connexion']);
  }
//______________________________pour le popup____________________________
  openDialog(){
    this.dialogRef.open(CreationRendezVousComponent);
  }

}

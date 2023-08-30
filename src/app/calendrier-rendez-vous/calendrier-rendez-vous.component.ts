import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';//pour la redirection
import { CalendarOptions } from '@fullcalendar/core/';
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from '@fullcalendar/daygrid'; // important!
import { Rendezvous } from '../rendezvous';

@Component({
  selector: 'app-calendrier-rendez-vous',
  templateUrl: './calendrier-rendez-vous.component.html',
  styleUrls: ['./calendrier-rendez-vous.component.css']
})
export class CalendrierRendezVousComponent {



  calendarPlugins = [dayGridPlugin]; // important!
  tableeau: Rendezvous[] = [];
  event1 = new Rendezvous("Evénément 1","2023-08-29");
  // service.getRendezList [
  //   { title: 'event 1', date: '2023-08-29' },
  //   { title: 'event 2', date: '2023-08-30' }
  // ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale,
    events: this.tableeau
  };
  constructor(private router: Router){
    this.tableeau.push(this.event1);
  }
  deconnexion(){
    this.router.navigate(['/Connexion']);
  }

}

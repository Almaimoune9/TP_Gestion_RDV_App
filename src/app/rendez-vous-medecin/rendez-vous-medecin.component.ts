import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import frLocale from '@fullcalendar/core/locales/fr';
import { DonnerRendezVousComponent } from '../donner-rendez-vous/donner-rendez-vous.component';

@Component({
  selector: 'app-rendez-vous-medecin',
  templateUrl: './rendez-vous-medecin.component.html',
  styleUrls: ['./rendez-vous-medecin.component.css']
})
export class RendezVousMedecinComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale
  }
  popupAffiche: boolean = false;
  constructor(private _dialog:MatDialog){

  }
  Openpopup(){
    if (!this.popupAffiche) {
      this._dialog.open(DonnerRendezVousComponent,{
      
    });
    this.popupAffiche = true;
  }
}
reinitialiserPopup() {
  this.popupAffiche = false;
}
}

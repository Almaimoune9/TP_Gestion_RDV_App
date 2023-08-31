import { Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import frLocale from '@fullcalendar/core/locales/fr';
import { DonnerRendezVousComponent } from '../donner-rendez-vous/donner-rendez-vous.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AfficherDetailRendezVousComponent } from '../afficher-detail-rendez-vous/afficher-detail-rendez-vous.component';


@Component({
  selector: 'app-rendez-vous-medecin',
  templateUrl: './rendez-vous-medecin.component.html',
  styleUrls: ['./rendez-vous-medecin.component.css']
})
export class RendezVousMedecinComponent  {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale,
    eventClick: this.handleDateClick.bind(this),
  };
  config = {
    animated : true
  };
  @ViewChild('template') template!: string;
  start: any;
  popupAffiche: boolean = false;
  constructor(private _dialog:MatDialog){

  }

  //Popup pour donner un rendez-vous
  Openpopup(){
    if (!this.popupAffiche) {

      const dialogRef = this._dialog.open(DonnerRendezVousComponent,{
    });
    dialogRef.afterClosed().subscribe(() => {
      // Le popup a été fermé, réinitialiser la variable
      this.popupAffiche = false;
    });

    this.popupAffiche = true;
  }
}
//Popup pour afficher les details du rendez-vous

//Fonction forEach


handleDateClick( event:any) {
//   if (!this.popupAffiche) {

//     const dialogRef = this._dialog.open(AfficherDetailRendezVousComponent,{
//   });
//   dialogRef.afterClosed().subscribe(() => {
//     // Le popup a été fermé, réinitialiser la variable
//     this.popupAffiche = false;
//   });

//   this.popupAffiche = true;
// }
if (!this.popupAffiche) {
  const dialogRef = this._dialog.open(AfficherDetailRendezVousComponent, {
    data: event, // Pass the event details to the dialog
  });

  dialogRef.afterClosed().subscribe(() => {
    // Le popup a été fermé, réinitialiser la variable
    this.popupAffiche = false;
  });

  this.popupAffiche = true;
}
}
}

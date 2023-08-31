import { Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import frLocale from '@fullcalendar/core/locales/fr';
import { DonnerRendezVousComponent } from '../donner-rendez-vous/donner-rendez-vous.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AfficherDetailRendezVousComponent } from '../afficher-detail-rendez-vous/afficher-detail-rendez-vous.component';


@Component({
  selector: 'app-rendez-vous-medecin',
  templateUrl: './rendez-vous-medecin.component.html',
  styleUrls: ['./rendez-vous-medecin.component.css']
})
export class RendezVousMedecinComponent implements OnInit {
  //Ajouter un événement
  modalRef?: BsModalRef;
  title: any;
  presentDays: number = 0;
  absentDays: number = 0;
  events : any[] =[
    {title: 'Present', date: '2023-08-20', color:'#000000ff'},
    {title: 'Absent', date: '2023-08-22', color:'#000000ff'},
    {title: 'Present', date: '2023-08-26', color:'#ff0000'}
  ];
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: frLocale,
    events: this.events,
    eventClick: this.handleDateClick.bind(this),
  };
  config = {
    animated : true
  };
  @ViewChild('template') template!: string;
  start: any;
  popupAffiche: boolean = false;
  constructor(private _dialog:MatDialog, private modalService: BsModalService){

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
ngOnInit(): void {
  this.events.forEach((e: { [x:string]: string; }) => {
    if (e["title"] == 'Present') {
      this.presentDays++;
    } else {
      this.absentDays++;
    }
  });

}
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

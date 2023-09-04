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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendrier-rendez-vous',
  templateUrl: './calendrier-rendez-vous.component.html',
  styleUrls: ['./calendrier-rendez-vous.component.css']
})
export class CalendrierRendezVousComponent implements OnInit {

//   tableauList:rendezVous[]=[];


//   calendarOptions: CalendarOptions = {
//     initialView: 'dayGridMonth',
//     plugins: [dayGridPlugin],
//     locale: frLocale,

//   };

//   constructor(private router: Router,private dialogRef:MatDialog,private rdvService:RdvService){

//   }
//   //================Recuperer la liste des rdv depuis le service==============
//   ngOnInit(): void {
//     this.tableauList=this.rdvService.getRdv();
//   }
//   deconnexion(){
//     this.router.navigate(['/Connexion']);
//   }
// //___________________________pour le popup__________________________
//   openDialog(){
//     this.dialogRef.open(CreationRendezVousComponent);
  // }


  // +++++++++++++++++++++++++++++POUR BANE ++++++++++++++++++++++++++


// medecinsSelect !: Medecin [] | any[];

rdvForm !: FormGroup;
eventForm!: FormGroup;

numRecords: number = 0;

calendarOptions: CalendarOptions = {};
calendarEvents: any[] = [];
rdvForms: rendezVous[] = []; // Votre liste de rendez-vous

     // Stockez le tableau des dates des rendez-vous

 datesWithAppointments: string[] = [];


constructor(
  private formBuilder: FormBuilder,
  // private dialogService : DialogService,
  private dialog: MatDialog,
  // private medecinService: AddDoctorService,
  private rdvService: RdvService,
  private router: Router,
  private dialogRef:MatDialog
) {
  this.rdvForm = this.formBuilder.group({
    id: ['null'],
    date: ['', Validators.required],
    heure: ['', Validators.required],
    medecin: ['', Validators.required],
    description: ['', Validators.required]
  });
}


ajouterRendezVousAuCalendrier() {

  //tableau des rdv



  // Parcourez la liste de rendez-vous et ajoutez-les au calendrier un par un
  for (const rdv of this.rdvForms) {
    this.calendarEvents.push({
      title: rdv.description,
      start: rdv.date + 'T' + rdv.heure,
    });


    this.datesWithAppointments.push(rdv.date);

        // Ajoutez une classe CSS personnalisée pour les jours avec rendez-vous
  const date = rdv.date + 'T00:00:00'; // Utilisez la date du rendez-vous
  const dayCell = document.querySelector(`.fc-day[data-date="${date}"]`);
  if (dayCell) {
    dayCell.classList.add('has-appointment');
  }

  this.datesWithAppointments = this.datesWithAppointments;


  }
}

eventSettings: EventSettingsModel = {
  dataSource: []
};

dayRender(date: any, cell: HTMLElement) {
  const dateString = date.format('YYYY-MM-DD'); // Formattez la date
  if (this.datesWithAppointments.includes(dateString)) {
    cell.style.backgroundColor = '#38B198';
  }
}

ngOnInit(): void {
  // this.medecinsSelect = this.medecinService.getMedecin();

  this.calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    locale: frLocale,
    events: this.calendarEvents,

    //     events: [
    //   {color:'#38B198', title:"hi"},
    //   { title: 'Occupé', start: new Date() },
    // ],
  };

  // Chargez votre liste de rendez-vous
  this.rdvForms = this.rdvService.getRdv();

  // Ajoutez les rendez-vous au calendrier
  this.ajouterRendezVousAuCalendrier();

}

deconnexion(){
      this.router.navigate(['/Connexion']);
    }
  //___________________________pour le popup__________________________
    openDialog(){
      this.dialogRef.open(CreationRendezVousComponent);
    }


}

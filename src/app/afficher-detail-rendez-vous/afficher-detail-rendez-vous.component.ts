import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-afficher-detail-rendez-vous',
  templateUrl: './afficher-detail-rendez-vous.component.html',
  styleUrls: ['./afficher-detail-rendez-vous.component.css']
})
export class AfficherDetailRendezVousComponent {

  // modalRef?: BsModalRef;
  // title: any;
  // presentDays: number = 0;
  // absentDays: number = 0;
  // events : any[] =[
  //   {title: 'Present', date: '2023-08-20', color:'#000000ff'},
  //   {title: 'Absent', date: '2023-08-22', color:'#000000ff'},
  //   {title: 'Present', date: '2023-08-26', color:'#ff0000'}
  // ];
  // constructor(private ref:MatDialogRef<AfficherDetailRendezVousComponent>){

  // }

  // closepopupdetail(){
  //   this.ref.close();
  // }
  newEvent = {
    date: '',
    time: '',
    patient: '',
    motif: ''
  };

  constructor(
    private ref: MatDialogRef<AfficherDetailRendezVousComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closepopupdetail() {
    this.ref.close();
  }

  createAppointment() {
    // Do something with the newEvent object (e.g., save it to a list of events)
    // For example, you can add it to your events array in the parent component
    this.data.events.push(this.newEvent);
    // Perform any necessary actions like sending data to a server, etc.
    this.ref.close();
  }
}

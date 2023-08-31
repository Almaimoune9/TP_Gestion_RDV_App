import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-donner-rendez-vous',
  templateUrl: './donner-rendez-vous.component.html',
  styleUrls: ['./donner-rendez-vous.component.css'],
})
export class DonnerRendezVousComponent implements OnInit {

  newEvent = {
    date: '',
    time: '',
    patient: '',
    motif: ''
  };

  constructor(
    private dialogRef: MatDialogRef<DonnerRendezVousComponent>
  ) {}

  ngOnInit() {
    // Any initialization code here
  }

  closepopupdetail() {
    this.dialogRef.close(); // Close the dialog
  }

  createAppointment() {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-donner-rendez-vous',
  templateUrl: './donner-rendez-vous.component.html',
  styleUrls: ['./donner-rendez-vous.component.css'],
})
export class DonnerRendezVousComponent {

  constructor(private ref:MatDialogRef<DonnerRendezVousComponent>){

  }
  
  closepopup(){
    this.ref.close();
  }
}

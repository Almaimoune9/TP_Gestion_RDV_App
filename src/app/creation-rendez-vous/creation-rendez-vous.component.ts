import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-creation-rendez-vous',
  templateUrl: './creation-rendez-vous.component.html',
  styleUrls: ['./creation-rendez-vous.component.css']
})
export class CreationRendezVousComponent {

  constructor(private dialogRef :MatDialog){
  }


  closepopup(){
    this.dialogRef.closeAll();
  }
}

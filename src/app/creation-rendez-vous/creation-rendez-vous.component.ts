import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RdvService } from '../mes_services/rdv.service';
import { rendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-creation-rendez-vous',
  templateUrl: './creation-rendez-vous.component.html',
  styleUrls: ['./creation-rendez-vous.component.css']
})
export class CreationRendezVousComponent {

  rdvForm !: FormGroup;

  // public id :number,
  // public date : string,
  // public heure : string,
  // public medecin : string,
  // public description : string,

  constructor(private rdvService :RdvService, private fb:FormBuilder){

    this.rdvForm = this.fb.group({
        // id: ['', Validators.required],
        date: ['', Validators.required],
        heure: ['', Validators.required],
        medecin: ['', Validators.required],
        description: ['', Validators.required],
      });
  }

  onSubmit() {
    if (this.rdvForm.valid) {
      const newRdv = this.rdvForm.value as rendezVous;
      this.rdvService.saveRdv(newRdv);
      console.warn(newRdv);
      this.rdvForm.reset();
    }
    // else {
    //   console.warn('Impossible de créer un rendez-vous.');
    // }
  }





//   validerRendezVous() {
//     // Enregistrer les données du rendez-vous dans le service RdvService
//     this.rdvService.rdvDetail.push(this.rendezVous);
//     this.rendezVous = new Rdv(0, this.rendezVous.date, this.rendezVous.heure,
//       this.rendezVous.medecin,this.rendezVous.description,this.rendezVous.title);
//     this.closepopup();
//     console.log(this.rendezVous);
// }

}

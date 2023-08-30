import { Component } from '@angular/core';
import { Medecin } from '../ajout-medecin/medecin';
import { MedecinService } from '../medecin.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent {
    listMedecin:Medecin[] = [];
    serviceMedecin:MedecinService;
    constructor(serviceMedecin:MedecinService){
    this.serviceMedecin = serviceMedecin;
    this.listMedecin = this.serviceMedecin.getMedecinList();
  }

}

import { Component } from '@angular/core';
import { Patient } from '../ajout-patient/patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent {
  listPatient:Patient[] = [];
  servicePatient:PatientService;
  constructor(servicePatient:PatientService){
    this.servicePatient = servicePatient;
    this.listPatient = this.servicePatient.getPatientList();
  }
}

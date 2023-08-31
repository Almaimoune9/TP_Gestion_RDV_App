import { Injectable } from '@angular/core';
import { Patient } from './ajout-patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientList:Patient[] = [];

  constructor() { }

  getPatientList():Patient[]{
    return this.patientList;
  }
  setPatientInList(patient:Patient){
    this.patientList.push(patient);
  }
}

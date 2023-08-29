import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { NgForm } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-patient',
  templateUrl :  './ajout-Patient.component.html',
  styleUrls: ['./ajout-patient.component.css']
})
export class AjoutPatientComponent implements OnInit{
  public passwordsDoNotMatch: boolean = false; // Déclaration de la propriété
  servicePatient:PatientService;
  constructor(servicePatient:PatientService,private router: Router){
    this.servicePatient = servicePatient;
  }
  public patient:Patient = new Patient("Votre Prenom ici","Votre nom ici","M ou F",
  "Votre date de naissance","votremail@gmail.com","12345678","12345678",70000000);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public EnregitreDonne (patientForm :NgForm){
    this.servicePatient.setPatientInList(this.patient);
    console.log(patientForm.form);
    console.log('value :' , JSON.stringify(patientForm.value));
    this.router.navigate(['/Mes_rendez_vous']);

    console.log("On the right way");
  }
  validatePasswordConfirmation() {
    this.passwordsDoNotMatch = this.patient.pass !== this.patient.confirme;
  }



}

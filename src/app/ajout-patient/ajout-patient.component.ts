import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-patient',
  templateUrl :  './ajout-Patient.component.html',

  styleUrls: ['./ajout-patient.component.css']
})
export class AjoutPatientComponent implements OnInit{

  // constructor(
  //   prenom: string,
  //   nom: string,
  //   sexe: string,
  //   naissance: string,
  //   email: string,
  //   pass: string,
  //   confirme: string,
  //   telephone: number
  // )
  public patient:Patient = new Patient("Mahamadou","Fadiga","M",
  "23/10/1900","example@gmail.com","1234","1234",76546378);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public EnregitreDonne (patientForm :NgForm){
    console.log(patientForm.form);
    console.log('value :' , JSON.stringify(patientForm.value));

    console.log("On the right way");
  }

}

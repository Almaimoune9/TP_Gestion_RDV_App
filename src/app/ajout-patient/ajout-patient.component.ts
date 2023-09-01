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
    
  }

  public EnregitreDonne (patientForm :NgForm){
    if(patientForm.form.valid){
    //========RECUPERER LA DATE DE NAISSANCE=================
    const naissance= new Date(patientForm.value.naissance);
    //===========Calcule de l'age================
    const age = this.calculerAge(naissance);
        if(age>=16){
          this.servicePatient.setPatientInList(this.patient);
          console.log(patientForm.form);
        console.log('value :' , JSON.stringify(patientForm.value));
        this.router.navigate(['/Mes_rendez_vous']);

        console.log("On the right way");
        }else{
          console.log("Vous devez avoir au moins 16 ans pour vous enregistrer.");
        }



  }else{
   console.log("veuiller bien remplire la formulaire");
  }

  }
  validatePasswordConfirmation() {
    this.passwordsDoNotMatch = this.patient.pass !== this.patient.confirme;
  }

  //============fonction pour calculer l'age ================
  private calculerAge(naissance: Date){

    const bi=new Date();

    const dateNaiss = new Date(naissance);

    let age =bi.getFullYear() - dateNaiss.getFullYear();
    const kallo = bi.getMonth() - dateNaiss.getMonth();

    if(kallo < 0 || (kallo===0 && bi.getDate()<dateNaiss.getDate())){
      age--;
    }
    return age;
  }


}

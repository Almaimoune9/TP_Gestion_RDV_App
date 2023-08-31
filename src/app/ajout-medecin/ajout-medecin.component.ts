
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medecin } from './medecin';
import { MedecinService } from '../medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.css']
})
export class AjoutMedecinComponent implements OnInit {
  public passwordsDoNotMatch : boolean=false;
  serviceMedecin:MedecinService;

  constructor(serviceMedecin:MedecinService,private router :Router){
    this.serviceMedecin=serviceMedecin;

  }

  public medecin: Medecin = new Medecin(
    "Votre Prenom ici",
    "Votre nom ici",
    "votremail@gmail.com",
    "Specialité",
    70000000,
    "12345678",
    "12345678");

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public EnregitreDonneMed(medecinForm:NgForm){
    if(medecinForm.form.valid){
      this.serviceMedecin.setMedecinInList(this.medecin);
    console.log(medecinForm.form);
    console.log('value :' , JSON.stringify(medecinForm.value));
    this.router.navigate(['/Mes_rendez_vous']);

    console.log("On the right way");
    }else{
      console.log("veuillez bien remplire le formulair");
    }

  }
  validatePasswordConfirmation() {
    this.passwordsDoNotMatch = this.medecin.pass !== this.medecin.confirme;
  }

}


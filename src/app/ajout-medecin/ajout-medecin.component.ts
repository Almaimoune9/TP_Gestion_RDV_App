<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { AutMedecinService } from '../aut-medecin.service';
=======
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medecin } from './medecin';
import { MedecinService } from '../medecin.service';
>>>>>>> f8defaaa493971d4d3816bb33dd96d367aa9a3f4
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.css']
})
<<<<<<< HEAD
export class AjoutMedecinComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
   private router: Router) {

  }

  // ajoutForm = this.builder.group({
  //   // id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
  //   nom: this.builder.control('', Validators.required),
  //   prenom: this.builder.control('', Validators.required),
  //   specialité: this.builder.control('', Validators.required),
  //   sexe: this.builder.control('sexe'),
  //   email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  //   motdepass: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/)')])),
  // });

  // procedureAjout() {
  //   if (this.ajoutForm.valid) {
  //     this.service.procedureAjout(this.ajoutForm.value).subscribe(res => {
  //       this.toastr.success('Ajouter avec succés')
  //     });
  //   } else {
  //     this.toastr.warning('Veuillez entrer des données valides');
  //     this.router.navigate(['connexion_Medecin']);
  //   }
  // }
=======
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
    this.serviceMedecin.setMedecinInList(this.medecin);
    console.log(medecinForm.form);
    console.log('value :' , JSON.stringify(medecinForm.value));
    this.router.navigate(['/Mes_rendez_vous']);

    console.log("On the right way");
  }
  validatePasswordConfirmation() {
    this.passwordsDoNotMatch = this.medecin.pass !== this.medecin.confirme;
  }

>>>>>>> f8defaaa493971d4d3816bb33dd96d367aa9a3f4
}


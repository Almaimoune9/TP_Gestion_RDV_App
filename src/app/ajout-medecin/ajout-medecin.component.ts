import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { AutMedecinService } from '../aut-medecin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.css']
})
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
}


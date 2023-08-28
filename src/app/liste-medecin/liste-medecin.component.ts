import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent {
  data= [
    {prenom: "Almen"},
    {nom: "Elmoctar"},
    {specialite: "dev"},
    {email: "@jdjdj"},
    {telephone: "902788003"}
  ];

}

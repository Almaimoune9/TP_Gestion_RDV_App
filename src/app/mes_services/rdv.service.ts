import { Injectable } from '@angular/core';
import { rendezVous } from '../models/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private listRdv:rendezVous[]=[];
  private idDjate = 1;

  rdvlocalKono(){
    localStorage.setItem('listRdv',JSON.stringify(this.listRdv));
  }

  //===============Ajout Rendez-vous=============
  saveRdv(Rdv:rendezVous){
    Rdv.id = this.idDjate;
    this.idDjate++;
    this.listRdv.push(Rdv);
    console.log(Rdv);
    this.rdvlocalKono();
  }

  //========recuperation des données ==============
  getRdv(){
    let Fdg:any = localStorage.getItem('listRdv');
    this.listRdv=JSON.parse(Fdg) || [];
    return this.listRdv;
  }

  //============Suprimer rendez-vous=============
  supRdv(Rdv:rendezVous){
    const index=this.listRdv.findIndex(r =>r.id ==Rdv.id);
    if(index!==-1){
      this.listRdv.splice(index,1);
      this.rdvlocalKono();
    }
  }
}

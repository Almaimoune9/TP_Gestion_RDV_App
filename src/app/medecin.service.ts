import { Injectable } from '@angular/core';
import { Medecin } from './ajout-medecin/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  medecinList:Medecin[] = [];

  constructor() { }

  getMedecinList():Medecin[]{
    return this.medecinList;
  }
  setMedecinInList(medecin:Medecin){
    this.medecinList.push(medecin);
  }
}

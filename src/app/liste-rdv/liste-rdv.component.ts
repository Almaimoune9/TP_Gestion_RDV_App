import { Component,OnInit } from '@angular/core';
import { RdvService } from '../mes_services/rdv.service';
import { rendezVous } from '../models/rendezVous';

@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRdvComponent implements OnInit{

  tableRDV :rendezVous[]=[]

  constructor(private serRdv: RdvService){}

  ngOnInit(): void {
    this.tableRDV=this.serRdv.getRdv();

  }


}

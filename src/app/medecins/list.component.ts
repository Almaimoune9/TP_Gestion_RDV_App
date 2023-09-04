import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { CompteService } from '@app/compte/compte.service';

@Component({ templateUrl: 'list.component.html',
styleUrls: ['./list.component.css', './ajouter-modifier.component.css'],
 })
export class ListComponent implements OnInit {
    medecins?: any[];

    constructor(private compteService: CompteService) {}

    ngOnInit() {
        this.compteService.getAll()
            .pipe(first())
            .subscribe((medecins: any[] | undefined) => this.medecins = medecins);
    }

    deleteMedecin(id: string) {
        const user = this.medecins!.find(x => x.id === id);
        user.isDeleting = true;
        this.compteService.delete(id)
            .pipe(first())
            .subscribe(() => this.medecins = this.medecins!.filter(x => x.id !== id));
    }
}
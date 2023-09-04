import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { MedecinsRoutingModule } from './medecins-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MedecinsRoutingModule
    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class MedecinsModule { }
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CompteService } from '@app/compte/compte.service';
import { AlertService } from '@app/_service';

@Component({ templateUrl: 'ajouter-modifier.component.html' })
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    loading = false;
    submitting = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private compteService: CompteService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        // form with validation rules
        this.form = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', Validators.required],
            telephone: ['', Validators.required],
            specialite: ['', Validators.required],
            // password only required in add mode
            motdepass: ['', [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])]]
        });

        this.title = 'Ajouter medecin';
        if (this.id) {
            // edit mode
            this.title = 'Modifier medecin';
            this.loading = true;
            this.compteService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.form.patchValue(x);
                    this.loading = false;
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;
        this.saveMedecin()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Medecin enregistrer', true);
                    this.router.navigateByUrl('/medecins');
                },
                error: error => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            })
    }

    private saveMedecin() {
        // create or update user based on id param
        return this.id
            ? this.compteService.update(this.id!, this.form.value)
            : this.compteService.register(this.form.value);
    }
}
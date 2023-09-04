import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CompteService } from './compte.service';
import { AlertService } from '@app/_service';

@Component({ templateUrl: 'register.component.html',
styleUrls: ['./register.component.css']
 })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private compteService: CompteService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.compteService.medecinValue) {
            this.router.navigate(['/Rendez_vous_medecin']);
        }
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            prenom: ['', Validators.required],
            nom: ['', Validators.required],
            specialite: ['', Validators.required],
            telephone: ['', Validators.required],
            email: ['', Validators.required],
            motdepass: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alert on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.compteService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('inscription reussie', true);
                    this.router.navigate(['/Rendez_vous_medecin'], { queryParams: { registered: true }});
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}

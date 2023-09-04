import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { medecin } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class CompteService {
    private medecinSubject: BehaviorSubject<medecin | null>;
    public medecin: Observable<medecin | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.medecinSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('medecin')!));
        this.medecin = this.medecinSubject.asObservable();
    }

    public get medecinValue() {
        return this.medecinSubject.value;
    }

    login(email: string, motdepass: string) {
        return this.http.post<medecin>(`${environment.apiUrl}/medecins/authenticate`, { email, motdepass })
            .pipe(map(medecin => {
                // store medecin details and jwt token in local storage to keep medecin logged in between page refreshes
                localStorage.setItem('medecin', JSON.stringify(medecin));
                this.medecinSubject.next(medecin);
                return medecin;
            }));
    }

    logout() {
        // remove medecin from local storage and set current medecin to null
        localStorage.removeItem('medecin');
        this.medecinSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(medecin: medecin) {
        return this.http.post(`${environment.apiUrl}/medecins/register`, medecin);
    }

    getAll() {
        return this.http.get<medecin[]>(`${environment.apiUrl}/medecins`);
    }

    getById(id: string) {
        return this.http.get<medecin>(`${environment.apiUrl}/medecins/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/medecins/${id}`, params)
            .pipe(map(x => {
                // update stored medecin if the logged in medecin updated their own record
                if (id == this.medecinValue?.id) {
                    // update local storage
                    const medecin = { ...this.medecinValue, ...params };
                    localStorage.setItem('medecin', JSON.stringify(medecin));

                    // publish updated medecin to subscribers
                    this.medecinSubject.next(medecin);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/medecins/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in medecin deleted their own record
                if (id == this.medecinValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
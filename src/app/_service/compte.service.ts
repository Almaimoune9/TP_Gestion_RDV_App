import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { medecin } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private MedecinSubject: BehaviorSubject<medecin | null>;
    public Medecin: Observable<medecin | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.MedecinSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('Medecin')!));
        this.Medecin = this.MedecinSubject.asObservable();
    }

    public get MedecinValue() {
        return this.MedecinSubject.value;
    }

    login(email: string, motdepass: string) {
        return this.http.post<medecin>(`${environment.apiUrl}/Medecins/authenticate`, { email, motdepass })
            .pipe(map(Medecin => {
                // store Medecin details and jwt token in local storage to keep Medecin logged in between page refreshes
                localStorage.setItem('Medecin', JSON.stringify(Medecin));
                this.MedecinSubject.next(Medecin);
                return Medecin;
            }));
    }

    logout() {
        // remove Medecin from local storage and set current Medecin to null
        localStorage.removeItem('Medecin');
        this.MedecinSubject.next(null);
        this.router.navigate(['/compte/login']);
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
                // update stored user if the logged in user updated their own record
                if (id == this.MedecinValue?.id) {
                    // update local storage
                    const medecin = { ...this.MedecinValue, ...params };
                    localStorage.setItem('medecin', JSON.stringify(medecin));

                    // publish updated user to subscribers
                    this.MedecinSubject.next(medecin);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/medecins/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.MedecinValue?.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
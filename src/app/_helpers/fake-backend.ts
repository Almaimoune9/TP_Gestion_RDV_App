import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered medecins
const medecinsKey = 'angular-tutorial-medecins';
let medecins: any[] = JSON.parse(localStorage.getItem(medecinsKey)!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();

        function handleRoute() {
            switch (true) {
                case url.endsWith('/medecins/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/medecins/register') && method === 'POST':
                        return register();
                        case url.endsWith('/medecins') && method === 'GET':
                            return getMedecins();
                        case url.match(/\/medecins\/\d+$/) && method === 'GET':
                            return getMedecinById();
                        case url.match(/\/medecins\/\d+$/) && method === 'PUT':
                            return updateMedecin();
                        case url.match(/\/medecins\/\d+$/) && method === 'DELETE':
                            return deleteMedecin();        
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
            const { email, motdepass } = body;
            const medecin = medecins.find(x => x.email === email && x.motdepass === motdepass);
            if (!medecin) return error('E-mail ou mot de pass incorrect');
            return ok({
                ...basicDetails(medecin),
                token: 'fake-jwt-token'
            })
        }

        function register() {
            const medecin = body

            if (medecins.find(x => x.email === medecin.email)) {
                return error('email "' + medecin.email + '" est déjà utilisé')
            }

            medecin.id = medecins.length ? Math.max(...medecins.map(x => x.id)) + 1 : 1;
            medecins.push(medecin);
            localStorage.setItem(medecinsKey, JSON.stringify(medecins));
            return ok();
        }

        function getMedecins() {
            if (!isLoggedIn()) return unauthorized();
            return ok(medecins.map(x => basicDetails(x)));
        }

        function getMedecinById() {
            if (!isLoggedIn()) return unauthorized();

            const medecin = medecins.find(x => x.id === idFromUrl());
            return ok(basicDetails(medecin));
        }

        function updateMedecin() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let medecin = medecins.find(x => x.id === idFromUrl());

            // only update motdepass if entered
            if (!params.motdepass) {
                delete params.motdepass;
            }

            // update and save medecin
            Object.assign(medecin, params);
            localStorage.setItem(medecinsKey, JSON.stringify(medecins));

            return ok();
        }

        function deleteMedecin() {
            if (!isLoggedIn()) return unauthorized();

            medecins = medecins.filter(x => x.id !== idFromUrl());
            localStorage.setItem(medecinsKey, JSON.stringify(medecins));
            return ok();
        }
        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message: string) {
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }


        function unauthorized() {
            return throwError(() => ({ status: 401, error: { message: 'Unauthorized' } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(medecin: any) {
            const { id, email, prenom, specialite, telephone, nom, motdepass} = medecin;
            return { id, email, nom, prenom, specialite, telephone, motdepass };
        }

    function isLoggedIn() {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }
    }
}


export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
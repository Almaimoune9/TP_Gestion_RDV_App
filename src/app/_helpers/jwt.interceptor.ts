import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { CompteService } from '@app/compte/compte.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private compteService: CompteService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const medecin = this.compteService.medecinValue;
        const isLoggedIn = medecin?.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${medecin.token}` }
            });
        }

        return next.handle(request);
    }
}
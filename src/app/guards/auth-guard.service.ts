import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private session: SessionService, private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.auth.redirectUrl = state.url;

    return this.session.isLoggedInAsAObservable().pipe(
      map((loggedIn) => {
        if (loggedIn) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
      }),
      catchError((err) => {
        console.log(err);
        this.router.navigate(['/login']);
        return of(false);
      }),
    );
  }
}

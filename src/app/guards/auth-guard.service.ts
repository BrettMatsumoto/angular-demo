import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private session: SessionService, private auth: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.auth.redirectUrl = state.url;

        // const roles = this.session.user.roles;
        // && roles.includes('admin') <--- goes into the if statement after the isLoggedIn()

        if (this.session.isLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
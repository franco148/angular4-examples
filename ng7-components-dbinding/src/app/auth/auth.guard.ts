import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, 
                router: RouterStateSnapshot): boolean | 
                                              UrlTree | 
                                              Promise<boolean | UrlTree> | 
                                              Observable<boolean | UrlTree> {

        // FIRST APPROACH
        // return this.authService.user.pipe(
        //     map(user => {
        //         return !!user;
        //     }),
        //     tap(isAuth => {
        //         if (!isAuth) {
        //             this.router.navigate(['/auth']);
        //         }
        //     })
        // );

        // SECOND APPROACH
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuth = !!user;
                if (isAuth) {
                    return true;
                }

                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}

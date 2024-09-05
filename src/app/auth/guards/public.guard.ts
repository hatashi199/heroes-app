import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	CanMatchFn,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

const checkAuthStatus = (): Observable<boolean> => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	return authService.checkAuthentication().pipe(
		tap((isAuth) => {
			if (isAuth) router.navigateByUrl('/');
		}),
		map((isAuth) => !isAuth)
	);
};

export const activatePublicGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
): Observable<boolean> => {
	return checkAuthStatus();
};

export const matchPublicGuard: CanMatchFn = (
	route: Route,
	segments: UrlSegment[]
): Observable<boolean> => {
	return checkAuthStatus();
};

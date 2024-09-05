import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private baseUrl: string = environment.backendUrl;
	private user?: User;

	constructor(private http: HttpClient, private router: Router) {}

	get currentUser(): User | null {
		if (!this.user) return null;

		return { ...this.user };
	}

	logIn(user: string, pass: string): Observable<User> {
		return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
			tap((user) => (this.user = user)),
			tap((user) => localStorage.setItem('token', 'si46FK29atv_199'))
		);
	}

	logOut() {
		this.user = undefined;
		localStorage.removeItem('token');
		this.router.navigateByUrl('/auth/login');
	}

	checkAuthentication(): Observable<boolean> {
		if (!localStorage.getItem('token')) return of(false);

		const token = localStorage.getItem('token');

		return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
			tap((user) => (this.user = user)),
			map((user) => !!user),
			catchError((error) => of(false))
		);
	}
}

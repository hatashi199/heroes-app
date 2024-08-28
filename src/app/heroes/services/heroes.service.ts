import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class HeroesService {
	private backendUrl: string = environment.backendUrl;

	constructor(private httpClient: HttpClient) {}

	getHeroes(): Observable<Hero[]> {
		return this.httpClient.get<Hero[]>(`${this.backendUrl}/heroes`);
	}

	getHeroById(id: string): Observable<Hero | undefined> {
		return this.httpClient
			.get<Hero>(`${this.backendUrl}/heroes/${id}`)
			.pipe(catchError((error) => of(undefined)));
	}

	getSuggestions(query: string): Observable<Hero[]> {
		return this.httpClient.get<Hero[]>(
			`${this.backendUrl}/heroes?q=${query}`
		);
	}
}

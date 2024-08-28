import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
	public searchInput: FormControl = new FormControl();
	public heroes: Hero[] = [];
	public heroSelected?: Hero;

	constructor(private heroesService: HeroesService) {}

	searchHero() {
		const query: string = this.searchInput.value || '';

		this.heroesService
			.getSuggestions(query)
			.subscribe((heroes) => (this.heroes = heroes));
	}

	heroOptionSelected(heroEmitted: string): void {
		this.heroSelected = this.heroes.filter(
			(hero) => hero.id === heroEmitted
		)[0];
		this.searchInput.reset();
		this.heroes = [];
	}
}

import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
	selector: 'heroes-new-page',
	templateUrl: './new-page.component.html',
	styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {
	public heroForm = new FormGroup({
		superhero: new FormControl<string>('', { nonNullable: true }),
		alter_ego: new FormControl<string>('', { nonNullable: true }),
		publisher: new FormControl<Publisher>(Publisher.DCComics),
		powers: new FormControl<string[]>([]),
		affiliation: new FormGroup({
			team: new FormControl<string>(''),
			role: new FormControl<string>('')
		}),
		first_appearance: new FormGroup({
			comic: new FormControl<string>('', { nonNullable: true }),
			year: new FormControl<number>(2024, { nonNullable: true })
		}),
		isAlien: new FormControl<boolean>(false, { nonNullable: true }),
		littleDescription: new FormControl<string>('', { nonNullable: true }),
		fullDescription: new FormControl<string>('', { nonNullable: true })
	});

	constructor(
		private heroesService: HeroesService,
		private activateRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		if (!this.router.url.includes('edit')) return;

		this.activateRoute.params
			.pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
			.subscribe((hero) => {
				if (!hero) this.router.navigateByUrl('/');

				this.heroForm.reset(hero);
			});
	}

	get currentHero(): Hero {
		const hero = this.heroForm.value as Hero;
		return hero;
	}

	onSubmitHero(): void {
		if (this.heroForm.invalid) return;

		if (this.currentHero.id) {
			this.heroesService
				.updateHero(this.currentHero)
				.subscribe((hero) => console.log(hero));

			return;
		}

		const publisherId =
			this.currentHero.publisher === 'DC Comics' ? 'dc' : 'marvel';
		const superheroId = this.currentHero.superhero
			.toLowerCase()
			.split(' ')
			.join('');
		this.currentHero.id = `${publisherId}-${superheroId}`;
		this.currentHero.powers = this.currentHero.powers[0].split(',');
		//TODO: Corregir powers
		this.heroesService
			.addHero({ ...this.currentHero })
			.subscribe((hero) => console.log(hero));
	}
}

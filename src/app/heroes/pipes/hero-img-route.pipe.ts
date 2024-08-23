import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
	name: 'heroImgRoute'
})
export class HeroImgRoutePipe implements PipeTransform {
	transform(hero: Hero): string {
		if (!hero) {
			return 'assets/no-image.png';
		}

		return `assets/heroes/${hero.id}.jpg`;
	}
}

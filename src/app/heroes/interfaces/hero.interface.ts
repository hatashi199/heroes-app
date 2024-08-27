export interface Hero {
	id: string;
	superhero: string;
	alter_ego: string;
	publisher: Publisher;
	powers: string[];
	affiliation: Affiliation;
	first_appearance: FirstAppearance;
	isAlien: boolean;
	littleDescription: string;
	fullDescription: string;
}

export interface Affiliation {
	team: string;
	role: Role;
}

export enum Role {
	Hero = 'Hero',
	Leader = 'Leader',
	Member = 'Member'
}

export interface FirstAppearance {
	comic: string;
	year: number;
}

export enum Publisher {
	DCComics = 'DC Comics',
	MarvelComics = 'Marvel Comics'
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../heroes/interfaces/hero.interface';

@Component({
	selector: 'shared-dropdown-autocomplete',
	templateUrl: './dropdown-autocomplete.component.html',
	styleUrl: './dropdown-autocomplete.component.css'
})
export class DropdownAutocompleteComponent {
	@Input()
	public heroesSuggested: Hero[] = [];

	@Input()
	public querySearch: string = '';

	@Output()
	public onOptionSelected: EventEmitter<string> = new EventEmitter<string>();

	emitOptionSelected(optionSelected: string): void {
		this.onOptionSelected.emit(optionSelected);
	}
}

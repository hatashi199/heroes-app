import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { DropdownAutocompleteComponent } from './components/dropdown-autocomplete/dropdown-autocomplete.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
	declarations: [
		Error404PageComponent,
		DropdownAutocompleteComponent,
		SnackbarComponent
	],
	imports: [CommonModule],
	exports: [
		Error404PageComponent,
		DropdownAutocompleteComponent,
		SnackbarComponent
	]
})
export class SharedModule {}

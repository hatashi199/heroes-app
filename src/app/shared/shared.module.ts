import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { DropdownAutocompleteComponent } from './components/dropdown-autocomplete/dropdown-autocomplete.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
	declarations: [
		Error404PageComponent,
		DropdownAutocompleteComponent,
		SnackbarComponent,
		ConfirmDialogComponent
	],
	imports: [CommonModule],
	exports: [
		Error404PageComponent,
		DropdownAutocompleteComponent,
		SnackbarComponent,
		ConfirmDialogComponent
	]
})
export class SharedModule {}

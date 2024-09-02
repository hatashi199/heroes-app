import { Component, OnDestroy, OnInit } from '@angular/core';
import { SnackbarService, SnackType } from '../../services/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'shared-snackbar',
	templateUrl: './snackbar.component.html',
	styleUrl: './snackbar.component.css'
})
export class SnackbarComponent implements OnInit, OnDestroy {
	public message: string = '';
	public isOpen: boolean = false;
	public snackType!: SnackType;

	private messageSubscription!: Subscription;
	private isOpenSubscription!: Subscription;
	private snackTypeSubscription!: Subscription;

	constructor(private snackbarService: SnackbarService) {}

	ngOnInit(): void {
		this.messageSubscription = this.snackbarService.getMessage.subscribe(
			(message) => (this.message = message)
		);
		this.isOpenSubscription = this.snackbarService.snackOpen.subscribe(
			(isOpen) => (this.isOpen = isOpen)
		);
		this.snackTypeSubscription =
			this.snackbarService.getSnackType.subscribe(
				(snackType) => (this.snackType = snackType)
			);
	}

	ngOnDestroy(): void {
		this.messageSubscription.unsubscribe();
		this.isOpenSubscription.unsubscribe();
		this.snackTypeSubscription.unsubscribe();
	}

	closeSnackbar(): void {
		this.snackbarService.closeSnackbar();
	}
}

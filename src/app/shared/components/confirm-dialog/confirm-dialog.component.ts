import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'shared-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
	public isModalOpen: boolean = false;

	@Output()
	public onUserDecision: EventEmitter<boolean> = new EventEmitter<boolean>();

	public isModalOpenSubscription!: Subscription;

	constructor(private confirmDialogService: ConfirmDialogService) {}

	ngOnInit(): void {
		this.isModalOpenSubscription =
			this.confirmDialogService.modalOpen.subscribe(
				(open) => (this.isModalOpen = open)
			);
	}

	ngOnDestroy(): void {
		this.isModalOpenSubscription.unsubscribe();
	}

	emitUserDecision(decision: boolean): void {
		this.onUserDecision.emit(decision);
	}

	closeDialogModal(): void {
		this.confirmDialogService.closeConfirmDialog();
	}

	outModalClose(e: MouseEvent) {
		e.stopPropagation();

		const modalBox = document.getElementById('modal');

		if (modalBox && !modalBox.contains(e.target as Node))
			this.closeDialogModal();
	}
}

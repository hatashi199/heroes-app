import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ConfirmDialogService {
	private isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

	get modalOpen(): Observable<boolean> {
		return this.isModalOpen.asObservable();
	}

	showConfirmDialog(): void {
		this.isModalOpen.next(true);
	}

	closeConfirmDialog(): void {
		this.isModalOpen.next(false);
	}
}

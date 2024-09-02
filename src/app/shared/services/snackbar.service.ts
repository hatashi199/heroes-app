import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type SnackType = 'success' | 'warning' | 'error';

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {
	private messageSubject = new BehaviorSubject<string>('');
	private isOpenSubject = new BehaviorSubject<boolean>(false);
	private snackTypeSubject = new BehaviorSubject<SnackType>('success');

	get getMessage(): Observable<string> {
		return this.messageSubject.asObservable();
	}

	get snackOpen(): Observable<boolean> {
		return this.isOpenSubject.asObservable();
	}

	get getSnackType(): Observable<SnackType> {
		return this.snackTypeSubject.asObservable();
	}

	showSnackbar(message: string, snackType: SnackType): void {
		this.messageSubject.next(message);
		this.isOpenSubject.next(true);
		this.snackTypeSubject.next(snackType);
	}

	closeSnackbar(): void {
		this.isOpenSubject.next(false);
		this.messageSubject.next('');
	}
}

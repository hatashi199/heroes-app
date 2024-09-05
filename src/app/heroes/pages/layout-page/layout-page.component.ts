import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
	selector: 'heroes-layout-page',
	templateUrl: './layout-page.component.html',
	styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
	public isOpen: boolean = false;

	constructor(private authService: AuthService) {}

	get getUser(): User | null {
		return this.authService.currentUser;
	}

	toggleSidebar(): void {
		if (this.isOpen) {
			this.isOpen = false;
			return;
		}

		this.isOpen = true;
	}

	onLogout() {
		this.authService.logOut();
	}
}

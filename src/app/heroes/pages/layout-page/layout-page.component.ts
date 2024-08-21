import { Component } from '@angular/core';

@Component({
	selector: 'heroes-layout-page',
	templateUrl: './layout-page.component.html',
	styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
	public isOpen: boolean = false;

	toggleSidebar(): void {
		if (this.isOpen) {
			this.isOpen = false;
			return;
		}

		this.isOpen = true;
	}
}

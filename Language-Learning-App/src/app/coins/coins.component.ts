import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'coins',
	templateUrl: './coins.component.html',
	styleUrls: ['./coins.component.scss'],
})
export class CoinsComponent {
	constructor(private router: Router) {}

	goBackToSettings() {
		this.router.navigateByUrl('/settings');
	}
}

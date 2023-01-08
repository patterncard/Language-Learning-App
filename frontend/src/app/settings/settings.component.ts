import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
	constructor(private router: Router) {}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	goToChangePicture() {
		this.router.navigateByUrl('/picture');
	}

	goToCoinsInfo() {
		this.router.navigateByUrl('/coins');
	}

	logOut() {
		localStorage.removeItem('token');
		this.router.navigateByUrl('');
	}
}

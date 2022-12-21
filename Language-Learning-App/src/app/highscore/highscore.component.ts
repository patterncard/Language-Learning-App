import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'highscore',
	templateUrl: './highscore.component.html',
	styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent {
	constructor(private router: Router) {}

	onContinue() {
		this.router.navigateByUrl('/home');
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}
}

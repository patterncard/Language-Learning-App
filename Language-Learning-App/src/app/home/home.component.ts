import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	// export class HomeComponent implements OnInit, OnDestroy {

	constructor(private router: Router) {}

	// ngOnInit() {}
	// ngOnDestroy() {}

	play() {
		this.router.navigateByUrl('/categories');
	}

	checkHighScore() {
		this.router.navigateByUrl('/highscore');
	}

	settings() {
		this.router.navigateByUrl('/settings');
	}
}

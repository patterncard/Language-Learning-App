import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	constructor(private router: Router) {}

	@Input() username = 'Username';
	// usernameActual = 'Pati';
	@Input() level = 'Level';
	levelNumber = 'Level 1';
	@Input() coins = 0;
	coinsCount = 10;
	@Input() points = 0;
	pointsCount = 200;
	@Input() pointsUntilNext = 0;
	pointsUntilNextCount = 800;

	ngOnInit() {
		// this.username = this.usernameActual;
		this.level = this.levelNumber;
		this.coins = this.coinsCount;
		this.points = this.pointsCount;
		this.pointsUntilNext = this.pointsUntilNextCount;
	}
	ngOnDestroy() {}

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

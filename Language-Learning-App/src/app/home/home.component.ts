import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsService } from './achievements.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
	constructor(
		private router: Router,
		private achievements: AchievementsService
	) {}

	username = 'Username';
	level = 0;
	coins = 0;
	points = 0;
	@Input() pointsUntilNext = 0;
	pointsUntilNextCount = 1000;

	ngOnInit() {
		this.level = this.achievements.level;
		this.coins = this.achievements.coins;
		this.points = this.achievements.points;
		this.pointsUntilNext = this.pointsUntilNextCount - this.points;
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

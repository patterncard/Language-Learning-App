import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsService } from './achievements.service';
import { User } from './user.interface';

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
	level = 1;
	coins = 0;
	points = 0;
	@Input() pointsUntilNext = 0;
	pointsUntilNextCount = 1000;

	ngOnInit() {
		this.level = this.achievements.level;
		this.coins = this.achievements.coins;
		this.achievements.getUser().subscribe((user: User) => {
			this.points = user.points!;
			this.pointsUntilNext = this.pointsUntilNextCount - this.points;
			this.username = user.username!;
			this.level = user.level!;
			this.coins = user.coins!;
		});
	}
	ngOnDestroy() {}

	play() {
		this.router.navigateByUrl('/game');
	}

	checkHighScore() {
		this.router.navigateByUrl('/highscore');
	}

	settings() {
		this.router.navigateByUrl('/settings');
	}
}

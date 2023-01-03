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
	pointsUntilNext = 0;
	pointsUntilNextCount = 1000;
	avatarUrl!: string;

	ngOnInit() {
		this.level = this.achievements.level;
		this.coins = this.achievements.coins;
		this.achievements.getUser().subscribe((user: User) => {
			this.points = user.points!;
			this.pointsUntilNext = this.pointsUntilNextCount - this.points;
			this.username = user.username!;
			this.level = user.level!;
			this.coins = user.coins!;
			this.avatarUrl = user.avatar?.url!;

			this.achievements.unlockedCategory1 = user.ishomeunlocked!;
			this.achievements.unlockedCategory2 = user.isfamilyunlocked!;
			this.achievements.unlockedCategory3 = user.isanimalsunlocked!;
			// this.achievements.unlockedCategory4 = user.ishomophonesunlocked!;
			// console.log(
			// 	'this.achievements.unlockedCategory1: ',
			// 	this.achievements.unlockedCategory1
			// );
			// this.achievements.unlockedCategory5 = user.istransitionunlocked!;
			// console.log(
			// 	'this.achievements.unlockedCategory1: ',
			// 	this.achievements.unlockedCategory1
			// );

			if (this.coins >= 100) {
				this.achievements.isReadyForExtraCategory = true;
			}
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

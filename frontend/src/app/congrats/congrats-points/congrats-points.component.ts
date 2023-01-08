import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from './../../home/user.interface';
@Component({
	selector: 'congrats-points',
	templateUrl: './congrats-points.component.html',
	styleUrls: ['./congrats-points.component.scss'],
})
export class CongratsPointsComponent implements OnInit, OnDestroy {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	previousPoints = 0;
	biggestScorePoints = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.achievementsService.getUser().subscribe((user: User) => {
			this.previousPoints = user.points!;
			this.achievementsService.sumPoints(this.previousPoints);
			this.biggestScorePoints =
				this.achievementsService.highestScorePoints;
			this.achievementsService.savePoints();
		});
	}

	continue() {
		if (this.achievementsService.areExtraCoins === true) {
			this.router.navigateByUrl('/congrats-coins');
		} else if (this.achievementsService.isNextLevel) {
			this.router.navigateByUrl('/congrats-level');
		} else if (this.achievementsService.isNextCategoryUnlocked) {
			this.router.navigateByUrl('/congrats-category');
		} else {
			this.router.navigateByUrl('/highscore');
		}
	}

	ngOnDestroy() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		this.achievementsService.highestScorePoints = 0;
	}
}

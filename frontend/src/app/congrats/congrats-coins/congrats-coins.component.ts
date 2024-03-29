import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from '../../home/user.interface';
@Component({
	selector: 'congrats-coins',
	templateUrl: './congrats-coins.component.html',
	styleUrls: ['./congrats-coins.component.scss'],
})
export class CongratsCoinsComponent implements OnInit, OnDestroy {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	currentCoins = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.achievementsService.getUser().subscribe((user: User) => {
			this.currentCoins = user.coins!;
			this.achievementsService.sumCoins(this.currentCoins);
			this.achievementsService.saveCoins();
		});
	}

	continue() {
		if (this.achievementsService.isNextLevel) {
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
		this.achievementsService.areExtraCoins = false;
	}
}

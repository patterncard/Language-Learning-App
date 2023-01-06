import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
@Component({
	selector: 'congrats-category',
	templateUrl: './congrats-category.component.html',
	styleUrls: ['./congrats-category.component.scss'],
})
export class CongratsCategoryComponent implements OnInit, OnDestroy {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}

	continue() {
		if (this.achievementsService.isExtraCategoryUnlocked) {
			this.router.navigateByUrl('/categories');
		} else {
			this.router.navigateByUrl('/highscore');
		}
	}

	ngOnDestroy() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		this.achievementsService.highestScorePoints = 0;
		this.achievementsService.areExtraCoins = false;
		this.achievementsService.isNextLevel = false;
		this.achievementsService.isNextCategoryUnlocked = false;
	}
}

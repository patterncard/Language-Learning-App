import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from '../../home/user.interface';
@Component({
	selector: 'congrats-category',
	templateUrl: './congrats-category.component.html',
	styleUrls: ['./congrats-category.component.scss'],
})
export class CongratsCategoryComponent implements OnInit {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	previousCategory = 0;
	currentLevel = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.achievementsService.getUser().subscribe((user: User) => {
			this.previousCategory = user.level!;
			console.log({ currentCategory: this.currentLevel });
			this.currentLevel = this.achievementsService.sumLevel(
				this.previousCategory
			);
			console.log({ currentLevel: this.currentLevel });
			this.achievementsService.saveLevel();
		});
	}
	continue() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		this.achievementsService.highestScorePoints = 0;
		this.achievementsService.areExtraCoins = false;
		this.currentLevel = 0;
		this.previousCategory = 0;
		this.achievementsService.isNextLevel = false;
		this.router.navigateByUrl('/highscore');
	}
}

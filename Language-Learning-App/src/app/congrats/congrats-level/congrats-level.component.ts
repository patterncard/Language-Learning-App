import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from '../../home/user.interface';
@Component({
	selector: 'congrats-level',
	templateUrl: './congrats-level.component.html',
	styleUrls: ['./congrats-level.component.scss'],
})
export class CongratsLevelComponent implements OnInit {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	previousLevel = 0;
	currentLevel = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.achievementsService.getUser().subscribe((user: User) => {
			this.previousLevel = user.level!;
			console.log({ currentLevel: this.currentLevel });
			this.currentLevel = this.achievementsService.sumLevel(
				this.previousLevel
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
		this.previousLevel = 0;
		this.achievementsService.isNextLevel = false;
		this.router.navigateByUrl('/home');
	}
}

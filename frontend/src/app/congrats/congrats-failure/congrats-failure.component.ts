import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from '../../home/user.interface';
@Component({
	selector: 'congrats-failure',
	templateUrl: './congrats-failure.component.html',
	styleUrls: ['./congrats-failure.component.scss'],
})
export class CongratsFailureComponent implements OnInit, OnDestroy {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}

	continue() {
		this.router.navigateByUrl('/highscore');
	}

	ngOnDestroy() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		this.achievementsService.areExtraCoins = false;
	}
}

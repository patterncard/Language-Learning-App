import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from './../../home/user.interface';
@Component({
	selector: 'congrats-points',
	templateUrl: './congrats-points.component.html',
	styleUrls: ['./congrats-points.component.scss'],
})
export class CongratsPointsComponent implements OnInit {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	previousPoints = 0;
	currentPoints = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.currentPoints = this.achievementsService.points;
		this.achievementsService.getUser().subscribe((user: User) => {
			this.previousPoints = user.points!;
			this.achievementsService.sumPoints(this.previousPoints);
			this.achievementsService.savePoints();
		});
	}

	continue() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		if (this.achievementsService.areExtraCoins === true) {
			this.router.navigateByUrl('/congrats-coins');
		} else {
			this.router.navigateByUrl('/home');
		}
	}
}

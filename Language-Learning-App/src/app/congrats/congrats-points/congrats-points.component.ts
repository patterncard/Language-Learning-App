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

	currentPoints = 0;
	gainedPoints = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.gainedPoints = this.achievementsService.points;
		this.achievementsService.getPoints().subscribe((user: User) => {
			this.currentPoints = user.points!;
			this.achievementsService.sumToTotalPoints(this.currentPoints);
			this.achievementsService.savePoints();
		});
	}
	continue() {
		this.achievementsService.points = 0;
		this.achievementsService.totalPoints = 0;
		this.router.navigateByUrl('/home');
	}
}

import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { GameService } from 'src/app/game/game.service';
import { AchievementsService } from 'src/app/home/achievements.service';

@Component({
	selector: 'congrats-points',
	templateUrl: './congrats-points.component.html',
	styleUrls: ['./congrats-points.component.scss'],
})
export class CongratsPointsComponent implements OnInit {
	constructor(
		private primengConfig: PrimeNGConfig,
		private achievementsService: AchievementsService
	) {}

	points!: number;

	ngOnInit() {
		this.primengConfig.ripple = true;
		// this.points = this.achievementsService.points;
		this.points = 100;
	}
	continue() {}
}

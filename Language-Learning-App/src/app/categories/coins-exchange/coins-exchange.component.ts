import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/home/achievements.service';

@Component({
	selector: 'coins-exchange',
	templateUrl: './coins-exchange.component.html',
	styleUrls: ['./coins-exchange.component.scss'],
})
export class CoinsExchangeComponent implements OnInit {
	isReady = false;

	constructor(private achievementsService: AchievementsService) {}

	ngOnInit(): void {
		this.isReady = this.achievementsService.isReadyForExtraCategory;
		console.log('this.isReady:', this.isReady);
	}
}

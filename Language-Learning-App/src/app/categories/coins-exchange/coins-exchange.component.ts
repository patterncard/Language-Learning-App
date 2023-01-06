import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from 'src/app/home/user.interface';

@Component({
	selector: 'coins-exchange',
	templateUrl: './coins-exchange.component.html',
	styleUrls: ['./coins-exchange.component.scss'],
})
export class CoinsExchangeComponent implements OnInit {
	isReady = false;
	coins = 0;

	constructor(
		private achievementsService: AchievementsService,
		private httpClient: HttpClient
	) {}

	ngOnInit(): void {
		this.isReady = this.achievementsService.isReadyForExtraCategory;
		console.log('this.isReady:', this.isReady);
	}

	unlockExtraCategory() {
		this.achievementsService.getUser().subscribe((user: User) => {
			this.coins = user.coins!;
			console.log(this.coins);
			if (this.coins >= 100) {
				this.coins -= 100;
				console.log(this.coins);
				if (!(this.coins >= 100)) {
					this.isReady = false;
				}
			} else {
				this.isReady = false;
			}
		});
	}
}

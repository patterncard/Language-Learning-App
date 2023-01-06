import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from 'src/app/home/user.interface';

@Component({
	selector: 'unlock-transition',
	templateUrl: './unlock-transition.component.html',
	styleUrls: ['./unlock-transition.component.scss'],
})
export class UnlockTransitionComponent implements OnInit, OnDestroy {
	isReady = false;
	coins = 0;

	constructor(
		private achievementsService: AchievementsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.isReady = this.achievementsService.isReadyForExtraCategory;
		console.log('this.isReady:', this.isReady);
	}

	unlockExtraCategory() {
		this.achievementsService.getUser().subscribe((user: User) => {
			this.coins = user.coins!;
			if (this.coins >= 100) {
				this.achievementsService.coins = this.coins - 100;
				this.achievementsService.unlockTransitionCategory();
				this.achievementsService.saveCoins();
				this.router.navigateByUrl('congrats-category');
			} else {
				this.isReady = false;
			}
		});
	}

	ngOnDestroy() {
		if (!(this.coins >= 100)) {
			this.isReady = false;
		}
	}
}

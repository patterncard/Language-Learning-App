import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementsService } from 'src/app/home/achievements.service';
import { User } from 'src/app/home/user.interface';

@Component({
	selector: 'unlock-homophones',
	templateUrl: './unlock-homophones.component.html',
	styleUrls: ['./unlock-homophones.component.scss'],
})
export class UnlockHomophonesComponent implements OnInit, OnDestroy {
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
				this.achievementsService.unlockHomophonesCategory();
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

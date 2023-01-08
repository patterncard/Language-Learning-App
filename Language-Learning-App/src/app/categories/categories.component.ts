import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UnlockHomophonesComponent } from './unlock-homophones/unlock-homophones.component';
import { GameService } from '../game/game.service';
import { AchievementsService } from '../home/achievements.service';
import { Category } from './category.interface';
import { UnlockTransitionComponent } from './unlock-transition/unlock-transition.component';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
	constructor(
		private router: Router,
		private gameService: GameService,
		private achievementsService: AchievementsService,
		public httpClient: HttpClient,
		public dialogService: DialogService
	) {}
	coinsCost = 100;
	unlocked1 = this.achievementsService.unlockedCategory1;
	unlocked2 = this.achievementsService.unlockedCategory2;
	unlocked3 = this.achievementsService.unlockedCategory3;
	unlocked4 = this.achievementsService.unlockedCategory4;
	unlocked5 = this.achievementsService.unlockedCategory5;
	ref!: DynamicDialogRef;
	isReady = false;

	ngOnInit() {
		this.isReady = this.achievementsService.isReadyForExtraCategory;
	}

	getCategory(categoryId: number) {
		return this.httpClient.get(
			`http://localhost:1337/api/categories/${categoryId}`
		);
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	goToGame() {
		const selectedGameRoutes = this.gameService.selectedGameRoutes;
		this.router.navigateByUrl(`/${selectedGameRoutes}`);
	}

	selectCategoryFood() {
		this.getCategory(1).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.goToGame();
		});
	}

	selectCategoryHome() {
		this.getCategory(2).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.goToGame();
		});
	}

	selectCategoryFamily() {
		this.getCategory(3).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.goToGame();
		});
	}

	selectCategoryAnimals() {
		this.getCategory(4).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.goToGame();
		});
	}

	selectCategoryHomophones() {
		this.getCategory(5).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.router.navigateByUrl('flashcard');
		});
	}

	selectCategoryTransitionWords() {
		this.getCategory(6).subscribe((category: Category) => {
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.router.navigateByUrl('flashcard');
		});
	}

	showUnlockHomophones() {
		this.ref = this.dialogService.open(UnlockHomophonesComponent, {
			header: 'Unlock Homophones category',
			width: '50%',
			contentStyle: { 'max-height': '500px', overflow: 'auto' },
			baseZIndex: 10000,
		});
	}

	showUnlockTransition() {
		this.ref = this.dialogService.open(UnlockTransitionComponent, {
			header: 'Unlock Transition category',
			width: '50%',
			contentStyle: { 'max-height': '500px', overflow: 'auto' },
			baseZIndex: 10000,
		});
	}

	ngOnDestroy() {
		if (this.ref) {
			this.ref.close();
		}
	}
}

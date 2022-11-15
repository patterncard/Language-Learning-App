import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { AchievementsService } from '../home/achievements.service';
import { Category } from './category.interface';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
	constructor(
		private router: Router,
		private gameService: GameService,
		private achievementsService: AchievementsService,
		public httpClient: HttpClient
	) {}
	coinsCost = 100;
	unlocked1 = this.achievementsService.unlockedCategory1;
	unlocked2 = this.achievementsService.unlockedCategory2;
	unlocked3 = this.achievementsService.unlockedCategory3;
	unlocked4 = this.achievementsService.unlockedCategory4;
	unlocked5 = this.achievementsService.unlockedCategory5;

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
		// this.gameService.selectedCategory =
		this.getCategory(1).subscribe((category: Category) => {
			console.log({ category });
			console.log(category.data?.attributes?.name);
			this.gameService.selectedCategory = category.data?.attributes?.name;
			this.goToGame();
		});
	}

	selectCategoryHome() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.home;
		this.goToGame();
	}

	selectCategoryFamily() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.family;
		this.goToGame();
	}

	selectCategoryAnimals() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.animals;
		this.goToGame();
	}

	selectCategoryHomophones() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.homophones;
		this.goToGame();
	}

	selectCategoryTransitionWords() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.transition;
		this.goToGame();
	}

	selectCategoryFormality() {
		this.gameService.selectedCategory =
			this.gameService.selectedGameType.formality;
		this.goToGame();
	}
}

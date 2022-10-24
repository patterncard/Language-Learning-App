import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { AchievementsService } from '../home/achievements.service';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
	constructor(
		private router: Router,
		private gameService: GameService,
		private achievementsService: AchievementsService
	) {}
	coinsCost = 100;
	unlocked1 = this.achievementsService.unlockedCategory1;
	unlocked2 = this.achievementsService.unlockedCategory2;
	unlocked3 = this.achievementsService.unlockedCategory3;
	unlocked4 = this.achievementsService.unlockedCategory4;
	unlocked5 = this.achievementsService.unlockedCategory5;

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	goToGame() {
		const selectedGameRoutes = this.gameService.selectedGameRoutes;
		this.router.navigateByUrl(`/${selectedGameRoutes}`);
	}

	selectCategoryFood() {
		this.gameService.selectedCategory = this.gameService.words.food;
		this.goToGame();
	}

	selectCategoryHome() {
		this.gameService.selectedCategory = this.gameService.words.home;
		this.goToGame();
	}

	selectCategoryFamily() {
		this.gameService.selectedCategory = this.gameService.words.family;
		this.goToGame();
	}

	selectCategoryAnimals() {
		this.gameService.selectedCategory = this.gameService.words.animals;
		this.goToGame();
	}

	selectCategoryHomophones() {
		this.gameService.selectedCategory = this.gameService.words.homophones;
		this.goToGame();
	}

	selectCategoryTransitionWords() {
		this.gameService.selectedCategory = this.gameService.words.transition;
		this.goToGame();
	}

	selectCategoryFormality() {
		this.gameService.selectedCategory = this.gameService.words.formality;
		this.goToGame();
	}
}

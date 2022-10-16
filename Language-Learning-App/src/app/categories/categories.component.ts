import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
	constructor(private router: Router, private gameService: GameService) {}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	selectCategoryFood() {
		this.gameService.selectedCategory = this.gameService.words.food;
		this.router.navigateByUrl('/flashcard');
	}

	selectCategoryHome() {
		this.gameService.selectedCategory = this.gameService.words.home;
		this.router.navigateByUrl('/flashcard');
	}

	selectCategoryFamily() {
		this.gameService.selectedCategory = this.gameService.words.family;
		this.router.navigateByUrl('/flashcard');
	}

	selectCategoryAnimals() {
		this.gameService.selectedCategory = this.gameService.words.animals;
		this.router.navigateByUrl('/flashcard');
	}

	selectCategoryClothes() {
		this.gameService.selectedCategory = this.gameService.words.clothes;
		this.router.navigateByUrl('/flashcard');
	}
	
	selectCategorySports() {
		this.gameService.selectedCategory = this.gameService.words.sports;
		this.router.navigateByUrl('/flashcard');
	}
	
	selectCategoryWeather() {
		this.gameService.selectedCategory = this.gameService.words.weather;
		this.router.navigateByUrl('/flashcard');
	}

	selectCategoryFormality() {
		this.gameService.selectedCategory = this.gameService.words.formality;
		this.router.navigateByUrl('/flashcard');
	}
}

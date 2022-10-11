import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
	// @Input() selectedCategory = '';
	constructor(private router: Router, private gameService: GameService) {}

	categoriesList = this.gameService.categories;

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	selectCategory() {
		// this.selectCategory =
		// const selCat = document.getElementById('button');
		// const selCat = document.getElementById('i')?.getAttribute('attr.value');
		// console.log(selCat);

		// console.log(this.selectedCategory);

		this.router.navigateByUrl('/flashcard');
	}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
	selectedCategory = '';
	constructor(private router: Router) {}

	categoriesList = [
		{
			id: 0,
			name: 'food',
		},
		{
			id: 1,
			name: 'home',
		},
		{
			id: 2,
			name: 'family',
		},
		{
			id: 3,
			name: 'animals',
		},
		{
			id: 4,
			name: 'clothes',
		},
		{
			id: 5,
			name: 'sports',
		},
		{
			id: 6,
			name: 'weather',
		},
		{
			id: 7,
			name: 'plants plants plants plants plants plants plants plants plants plants plants',
		},
	];

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	selectCategory() {
		// this.selectedCategory = this.categoriesList.
		this.router.navigateByUrl('/game');
	}
}

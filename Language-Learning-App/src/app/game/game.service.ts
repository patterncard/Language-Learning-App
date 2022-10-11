import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	constructor() { }

	words = {
		food: [
			{
				en: 'water',
				pl: 'woda',
			},
			{
				en: 'egg',
				pl: 'jajko',
			},
			{
				en: 'apple',
				pl: 'jabłko',
			},
			{
				en: 'cheese',
				pl: 'ser',
			},
			{
				en: 'apricot',
				pl: 'morela',
			},
			{
				en: 'carrot',
				pl: 'marchewka',
			},
			{
				en: 'milk',
				pl: 'mleko',
			},
			{
				en: 'rice',
				pl: 'ryż',
			},
			{
				en: 'chicken',
				pl: 'kurczak',
			},
			{
				en: 'fish',
				pl: 'ryba',
			},
		],
		home: [
			{
				en: 'room',
				pl: 'pokój',
			},
			{
				en: 'bedroom',
				pl: 'sypialnia',
			},
			{
				en: 'house',
				pl: 'dom',
			},
			{
				en: 'kitchen',
				pl: 'kuchnia',
			},
			{
				en: 'bathroom',
				pl: 'łazienka',
			},
			{
				en: 'bed',
				pl: 'łóżko',
			},
			{
				en: 'table',
				pl: 'stół',
			},
			{
				en: 'chair',
				pl: 'krzesło',
			},
			{
				en: 'living room',
				pl: 'salon',
			},
			{
				en: 'office',
				pl: 'gabinet',
			},
		],
		family: [],
		animals: [],
		clothes: [],
		sports: [],
		weather: [],
		formality: [],
	};

	categories = Object.getOwnPropertyNames(this.words);
}

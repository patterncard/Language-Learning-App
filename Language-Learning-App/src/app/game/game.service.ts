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
	};
}

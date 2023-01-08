import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	selectedCategory: any;
	selectedGameRoutes: any;
	selectedGameType: any;

	gameRoutes = ['flashcard', 'sentence', 'image'];

	words: any;
	sentences: any;
	images: any;
}

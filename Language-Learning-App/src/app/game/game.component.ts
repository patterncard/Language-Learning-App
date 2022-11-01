import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent {
	constructor(private router: Router, private gameService: GameService) {}

	chooseFlashcards() {
		this.gameService.selectedGameRoutes = this.gameService.gameRoutes[0];
		this.gameService.selectedGameType = this.gameService.words;
		this.router.navigateByUrl('/categories');
	}

	chooseSentence() {
		this.gameService.selectedGameRoutes = this.gameService.gameRoutes[1];
		this.gameService.selectedGameType = this.gameService.sentences;
		this.router.navigateByUrl('/categories');
	}

	chooseImage() {
		this.gameService.selectedGameRoutes = this.gameService.gameRoutes[2];
		this.gameService.selectedGameType = this.gameService.images;
		this.router.navigateByUrl('/categories');
	}
}

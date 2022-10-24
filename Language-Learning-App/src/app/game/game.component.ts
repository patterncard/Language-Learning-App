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
	selGame: any;

	chooseFlashcards() {
		this.gameService.selectedGameRoutes = this.gameService.gameRoutes[0];
		this.router.navigateByUrl('/categories');
	}

	chooseSentence() {
		this.gameService.selectedGameRoutes = this.gameService.gameRoutes[1];
		this.router.navigateByUrl('/categories');
	}
}

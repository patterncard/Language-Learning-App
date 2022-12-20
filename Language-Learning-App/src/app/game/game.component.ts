import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
	constructor(private router: Router, private gameService: GameService) {}

	ngOnInit() {
		// this.rondomizeGameType();
	}

	rondomizeGameType() {
		const gameCount = this.gameService.gameRoutes.length;
		const randomType = Math.floor(Math.random() * gameCount);
		console.log(randomType);
		if (randomType === 0) {
			this.chooseFlashcards();
		} else if (randomType === 1) {
			this.chooseSentence();
		} else {
			this.chooseImage();
		}
	}

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { GameService } from '../game.service';
@Component({
	selector: 'flashcard',
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
	message: any;
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService
	) {}

	isChecked = false;
	isCorrectAnswear = false;
	word = '';

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.isCorrectAnswear = true;

		this.word = this.gameService.words.food[0].en;
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
	}

	nextFlashcard() {
		this.isChecked = false;
	}
}

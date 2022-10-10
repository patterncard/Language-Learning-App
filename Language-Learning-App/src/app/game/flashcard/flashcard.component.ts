import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
	enteredWord = new FormControl('');
	randomWord = 0;
	points = 0;

	ngOnInit() {
		console.log(this.isChecked);
		this.primengConfig.ripple = true;
		this.generateWord();
		console.log(this.isChecked);
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
		console.log(this.word);
		console.log(this.enteredWord.value);
		if (
			this.enteredWord.value ===
			this.gameService.words.food[this.randomWord].pl
		) {
			this.isCorrectAnswear = true;
			this.points += 10;
			console.log(this.points);
		} else {
			this.isCorrectAnswear = false;
		}
	}

	nextFlashcard() {
		this.isChecked = false;
		this.generateWord();
		this.resetInput();
	}

	generateWord() {
		this.randomWord = Math.floor(
			Math.random() * this.gameService.words.food.length
		);
		this.word = this.gameService.words.food[this.randomWord].en;
	}

	resetInput() {
		this.enteredWord = new FormControl('');
	}
}

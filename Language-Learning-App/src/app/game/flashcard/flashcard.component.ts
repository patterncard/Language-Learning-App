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
	) {
		this.languageOptions = [
			{ name: 'EN->PL', language: 'en' },
			{ name: 'PL->EN', language: 'pl' },
		];
	}

	isChecked = false;
	isCorrectAnswear = false;
	word = '';
	enteredWord = new FormControl('');
	randomWord = 0;
	points = 0;
	languageOptions: any[];
	selectedLanguage = '';
	isEnglishToPolish = false;

	ngOnInit() {
		console.log(this.isChecked);
		this.primengConfig.ripple = true;
		this.generateWord();
		console.log(this.isChecked);
		this.selectedLanguage = this.languageOptions[0];
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
		console.log(this.word);
		console.log(this.enteredWord.value);
		if (!this.isEnglishToPolish) {
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
		} else {
			if (
				this.enteredWord.value ===
				this.gameService.words.food[this.randomWord].en
			) {
				this.isCorrectAnswear = true;
				this.points += 10;
				console.log(this.points);
			} else {
				this.isCorrectAnswear = false;
			}
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
		if (!this.isEnglishToPolish) {
			this.word = this.gameService.words.food[this.randomWord].en;
		} else {
			this.word = this.gameService.words.food[this.randomWord].pl;
		}
	}

	resetInput() {
		this.enteredWord = new FormControl('');
	}

	changeLanguage() {
		this.isEnglishToPolish = true;
	}
}

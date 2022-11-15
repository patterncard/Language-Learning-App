import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { GameService } from '../game.service';
import { Words } from './words.interface';
@Component({
	selector: 'flashcard',
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService,
		private achievements: AchievementsService,
		private httpClient: HttpClient
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
	words: any;
	wordsCount = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.generateWord();
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
				this.gameService.selectedCategory[this.randomWord].pl
				// this.words[this.randomWord].attributes.pl
			) {
				this.isCorrectAnswear = true;
				this.points += 10;
				this.achievements.points = this.points;
				console.log(this.points);
			} else {
				this.isCorrectAnswear = false;
				console.log(
					this.gameService.selectedCategory[this.randomWord].pl
				);
			}
		} else {
			if (
				this.enteredWord.value ===
				this.gameService.selectedCategory[this.randomWord].en
			) {
				this.isCorrectAnswear = true;
				this.points += 10;
				this.achievements.points = this.points;
				console.log(this.points);
			} else {
				this.isCorrectAnswear = false;
				console.log(
					this.gameService.selectedCategory[this.randomWord].en
				);
			}
		}
		this.achievements.savePoints();
	}

	nextFlashcard() {
		this.isChecked = false;
		this.generateWord();
		this.resetInput();
	}

	generateWord() {
		this.getWords().subscribe((words: Words) => {
			this.words = words.data;
			this.wordsCount = words.data!.length;
			this.randomWord = Math.floor(Math.random() * this.wordsCount);
			if (!this.isEnglishToPolish) {
				this.word = this.words[this.randomWord].attributes.en;
			} else {
				this.word = this.words[this.randomWord].attributes.pl;
			}
		});
	}

	getWords() {
		return this.httpClient.get('http://localhost:1337/api/flashcards');
	}

	resetInput() {
		this.enteredWord = new FormControl('');
	}

	changeLanguage() {
		this.isEnglishToPolish = true;
		// !this.isEnglishToPolish;
		// if (this.selectedLanguage == this.languageOptions[0]) {
		// 	this.selectedLanguage = this.languageOptions[1];
		// } else {
		// 	this.selectedLanguage = this.languageOptions[0];
		// }
		this.generateWord();
		this.resetInput();
		this.isChecked = false;
	}
}

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
	points = 10;
	languageOptions: any[];
	selectedLanguage = '';
	isEnglishToPolish = true;
	words: any;
	wordsCount = 0;
	approachesCount = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.generateWord();
		this.selectedLanguage = this.languageOptions[0];
	}

	goBackHome() {
		this.achievements.points = 0;
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
		console.log(this.word);
		console.log(this.enteredWord.value);

		if (this.isEnglishToPolish) {
			if (
				this.enteredWord.value ===
				this.words[this.randomWord].attributes.pl
			) {
				this.isCorrectAnswear = true;
				this.achievements.addPoints(this.points);
			} else {
				this.isCorrectAnswear = false;
				console.log(this.words[this.randomWord].attributes.pl);
			}
		} else {
			if (
				this.enteredWord.value ===
				this.words[this.randomWord].attributes.en
			) {
				this.isCorrectAnswear = true;
				this.achievements.addPoints(this.points);
			} else {
				this.isCorrectAnswear = false;
				console.log(this.words[this.randomWord].attributes.en);
			}
		}
	}

	nextFlashcard() {
		if (this.achievements.isNextLevel) {
			this.router.navigateByUrl('/congrats-level');
		}
		this.isChecked = false;
		this.generateWord();
		this.resetInput();
	}

	generateWord() {
		if (this.approachesCount === 10) {
			if (this.achievements.highestScorePoints) {
				this.router.navigateByUrl('congrats-points');
			} else {
				this.router.navigateByUrl('congrats-failure');
			}
		} else {
			this.getWords().subscribe((words: Words) => {
				this.words = words.data;
				this.wordsCount = words.data!.length;
				this.randomWord = Math.floor(Math.random() * this.wordsCount);
				if (this.isEnglishToPolish) {
					this.word = this.words[this.randomWord].attributes.en;
				} else {
					this.word = this.words[this.randomWord].attributes.pl;
				}
			});
			this.approachesCount++;
		}
	}

	getWords() {
		return this.httpClient.get(
			`https://language-learn.onrender.com/api/flashcards?filters\[category\][name][$eq]=${this.gameService.selectedCategory}&populate=*`
		);
	}

	resetInput() {
		this.enteredWord = new FormControl('');
	}

	changeLanguage() {
		this.isEnglishToPolish = !this.isEnglishToPolish;
		this.generateWord();
		this.resetInput();
		this.isChecked = false;
	}
}

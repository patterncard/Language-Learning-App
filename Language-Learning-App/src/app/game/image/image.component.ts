import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { GameService } from '../game.service';
@Component({
	selector: 'image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
	correctWordImage: any;
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService,
		private achievementsService: AchievementsService
	) {
	}

	isChecked = false;
	isCorrectAnswear = false;
	word = '';
	enteredWord = new FormControl('');
	randomWord = 0;
	points = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.generateWord();
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
				this.gameService.selectedCategory[this.randomWord].en
			) {
				this.isCorrectAnswear = true;
				this.points += 10;
				this.achievementsService.points = this.points;
				console.log(this.points);
			} else {
				this.isCorrectAnswear = false;
				console.log(
					this.gameService.selectedCategory[this.randomWord].en
				);
			}
	}

	nextImage() {
		this.isChecked = false;
		this.generateWord();
		this.resetInput();
	}

	generateWord() {
		this.randomWord = Math.floor(
			Math.random() * this.gameService.selectedCategory.length
		);
		this.word = this.gameService.selectedCategory[this.randomWord].pl;
		this.word = 'water';
		// 			this.correctWordImage =
		// 				this.gameService.selectedCategory[this.randomWord].en;

	}

	generateIncorrectWords() {}

	resetInput() {
		this.enteredWord = new FormControl('');
	}

	select() {}
}

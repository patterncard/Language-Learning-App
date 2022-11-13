import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { GameService } from '../game.service';
@Component({
	selector: 'sentence',
	templateUrl: './sentence.component.html',
	styleUrls: ['./sentence.component.scss'],
})
export class SentenceComponent implements OnInit {
	part1En = '';
	gapEn = '';
	part2En = '';
	part1Pl = '';
	gapPl = '';
	part2Pl = '';
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService,
		private achievements: AchievementsService
	) {}

	isChecked = false;
	isCorrectAnswear = false;
	enteredGap = new FormControl('');
	randomWord = 0;
	points = 10;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.generateSentences();
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
		console.log(this.gapEn);
		console.log(this.enteredGap.value);

		if (
			this.enteredGap.value ===
			this.gameService.selectedCategory[this.randomWord].pl.gap
		) {
			this.isCorrectAnswear = true;
			this.achievements.sumPoints(this.points);
		} else {
			this.isCorrectAnswear = false;
			console.log(
				this.gameService.selectedCategory[this.randomWord].pl.gap
			);
		}
	}

	nextSentence() {
		this.isChecked = false;
		this.generateSentences();
		this.resetInput();
	}

	generateSentences() {
		this.randomWord = Math.floor(
			Math.random() * this.gameService.selectedCategory.length
		);
		this.part1En =
			this.gameService.selectedCategory[this.randomWord].en.part1;
		this.gapEn = this.gameService.selectedCategory[this.randomWord].en.gap;
		this.part2En =
			this.gameService.selectedCategory[this.randomWord].en.part2;

		this.part1Pl =
			this.gameService.selectedCategory[this.randomWord].pl.part1;
		this.gapPl = this.gameService.selectedCategory[this.randomWord].pl.gap;
		this.part2Pl =
			this.gameService.selectedCategory[this.randomWord].pl.part2;
	}

	resetInput() {
		this.enteredGap = new FormControl('');
	}
}

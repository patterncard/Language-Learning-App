import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { GameService } from '../game.service';
import { Sentences } from './sentences.interface';
@Component({
	selector: 'sentence',
	templateUrl: './sentence.component.html',
	styleUrls: ['./sentence.component.scss'],
})
export class SentenceComponent implements OnInit {
	part1En!: string;
	gapEn = '';
	part2En = '';
	part1Pl = '';
	gapPl = '';
	part2Pl = '';
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService,
		private achievements: AchievementsService,
		private httpClient: HttpClient
	) {}

	isChecked = false;
	isCorrectAnswear = false;
	enteredGap = new FormControl('');
	randomWord = 0;
	points = 10;
	sentences: any;
	sentencesCount!: number;

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
			this.sentences[this.randomWord].attributes.plGap
		) {
			this.isCorrectAnswear = true;
			this.achievements.sumPoints(this.points);
		} else {
			this.isCorrectAnswear = false;
			console.log(this.sentences[this.randomWord].attributes.plGap);
		}
		this.achievements.savePoints();
	}

	nextSentence() {
		this.isChecked = false;
		this.generateSentences();
		this.resetInput();
	}

	generateSentences() {
		this.getSentences().subscribe((sentences: Sentences) => {
			this.sentences = sentences.data;
			this.sentencesCount = sentences.data!.length;
			this.randomWord = Math.floor(Math.random() * this.sentencesCount);

			this.part1En = this.sentences[this.randomWord].attributes.enPart1;
			this.gapEn = this.sentences[this.randomWord].attributes.enGap;
			this.part2En = this.sentences[this.randomWord].attributes.enPart2;

			this.part1Pl = this.sentences[this.randomWord].attributes.plPart1;
			this.gapPl = this.sentences[this.randomWord].attributes.plGap;
			this.part2Pl = this.sentences[this.randomWord].attributes.plPart2;
		});
	}

	getSentences() {
		return this.httpClient.get(
			`http://localhost:1337/api/sentences?filters\[category\][name][$eq]=${this.gameService.selectedCategory}&populate=*`
		);
	}

	resetInput() {
		this.enteredGap = new FormControl('');
	}
}

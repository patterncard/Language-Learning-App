import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AchievementsService } from 'src/app/home/achievements.service';
import { GameService } from '../game.service';
import { Images } from './images.interface';
@Component({
	selector: 'image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
	images: any;
	imagesCount!: number;
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private gameService: GameService,
		private achievementsService: AchievementsService,
		private httpClient: HttpClient
	) {}

	isChecked = false;
	isCorrectAnswear = false;
	points = 10;
	generatedWords: string[] = [];
	word0: string = '';
	word1: string = '';
	word2: string = '';
	word3: string = '';
	generatedWordsInPolish: string[] = [];
	wordInPolishToDisplay: any;
	selectedChoice0 = false;
	selectedChoice1 = false;
	selectedChoice2 = false;
	selectedChoice3 = false;
	approachesCount = 0;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.generateWord();
		this.shuffleTiles();
	}

	goBackHome() {
		this.achievementsService.points = 0;
		this.router.navigateByUrl('/home');
	}

	checkAnswear() {
		this.isChecked = true;
		if (this.selectedChoice0) {
			this.isCorrectAnswear = true;
			this.achievementsService.addPoints(this.points);
		} else {
			this.isCorrectAnswear = false;
		}
		this.resetInput();
	}

	nextImage() {
		this.isChecked = false;
		this.generateWord();
		this.resetInput();
		this.deselectAll();
	}

	generateWord() {
		if (this.approachesCount === 10) {
			this.router.navigateByUrl('congrats-points');
		} else {
			this.getImages().subscribe((images: Images) => {
				this.images = images.data;
				this.imagesCount = images.data!.length;
				const randomNumbers = [];
				while (randomNumbers.length < 4) {
					const random = Math.floor(Math.random() * this.imagesCount);
					if (randomNumbers.indexOf(random) === -1) {
						randomNumbers.push(random);
						this.generatedWords.push(
							this.images[random].attributes.image.data.attributes
								.url
						);
						this.generatedWordsInPolish.push(
							this.images[random].attributes.pl
						);
					}
				}
				this.wordInPolishToDisplay = this.generatedWordsInPolish[0];
				this.word0 = `http://localhost:1337${this.generatedWords[0]}`;
				this.word1 = `http://localhost:1337${this.generatedWords[1]}`;
				this.word2 = `http://localhost:1337${this.generatedWords[2]}`;
				this.word3 = `http://localhost:1337${this.generatedWords[3]}`;
				this.approachesCount++;
			});
		}
	}

	getImages() {
		return this.httpClient.get(
			`http://localhost:1337/api/images?filters\[category\][name][$eq]=${this.gameService.selectedCategory}&populate=*`
		);
	}

	shuffleTiles() {
		const choice = document.getElementById('choice');
		for (var i = choice!.children.length; i >= 0; i--) {
			choice!.appendChild(choice!.children[(Math.random() * i) | 0]); // Fisher–Yates shuffle
		}
	}

	resetInput() {
		this.generatedWords = [];
		this.generatedWordsInPolish = [];
	}

	select0() {
		this.selectedChoice0 = !this.selectedChoice0;
		if (this.selectedChoice0) {
			this.selectedChoice1 = false;
			this.selectedChoice2 = false;
			this.selectedChoice3 = false;
		}
	}

	select1() {
		this.selectedChoice1 = !this.selectedChoice1;
		if (this.selectedChoice1) {
			this.selectedChoice0 = false;
			this.selectedChoice2 = false;
			this.selectedChoice3 = false;
		}
	}

	select2() {
		this.selectedChoice2 = !this.selectedChoice2;
		if (this.selectedChoice2) {
			this.selectedChoice1 = false;
			this.selectedChoice0 = false;
			this.selectedChoice3 = false;
		}
	}

	select3() {
		this.selectedChoice3 = !this.selectedChoice3;
		if (this.selectedChoice3) {
			this.selectedChoice1 = false;
			this.selectedChoice2 = false;
			this.selectedChoice0 = false;
		}
	}

	deselectAll() {
		if (this.selectedChoice0) this.selectedChoice0 = false;
		if (this.selectedChoice1) this.selectedChoice1 = false;
		if (this.selectedChoice2) this.selectedChoice2 = false;
		if (this.selectedChoice3) this.selectedChoice3 = false;
	}
}

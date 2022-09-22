import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'flashcard',
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
	constructor(private router: Router, private primengConfig: PrimeNGConfig) {}

	isChecked = false;
	isCorrectAnswear = false;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.isCorrectAnswear = true;
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

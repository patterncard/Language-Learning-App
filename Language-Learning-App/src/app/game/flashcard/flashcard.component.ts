import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'flashcard',
	templateUrl: './flashcard.component.html',
	styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent {
	constructor(private router: Router) {}

	goBackHome() {
		
		this.router.navigateByUrl('/home');
	}
}

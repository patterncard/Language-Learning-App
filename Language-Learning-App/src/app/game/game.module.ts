import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameComponent } from './game.component';

@NgModule({
	declarations: [GameComponent],
})
export class GameModule implements OnInit {
	constructor(private router: Router) {}
	ngOnInit(): void {
		// this.router.navigateByUrl('/flashcard');
	}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Highscore } from './highscore';

@Component({
	selector: 'highscore',
	templateUrl: './highscore.component.html',
	styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent implements OnInit {
	highscores: Array<Highscore> = [];

	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private httpClient: HttpClient
	) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.httpClient
			.get<Highscore[]>(
				'http://localhost:1337/api/users/?sort=points%3Adesc'
			)
			.subscribe((res) => {
				this.highscores = res;
			});
	}

	onContinue() {
		this.router.navigateByUrl('/home');
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}
}

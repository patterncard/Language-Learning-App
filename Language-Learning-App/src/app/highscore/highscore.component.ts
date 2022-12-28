import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'highscore',
	templateUrl: './highscore.component.html',
	styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent implements OnInit {
	constructor(private router: Router, private primengConfig: PrimeNGConfig) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}

	onContinue() {
		this.router.navigateByUrl('/home');
	}

	goBackHome() {
		this.router.navigateByUrl('/home');
	}
}

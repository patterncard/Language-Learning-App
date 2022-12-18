import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'picture',
	templateUrl: './picture.component.html',
	styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
	constructor(private router: Router, private primengConfig: PrimeNGConfig) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}

	goBackToSettings() {
		this.router.navigateByUrl('/settings');
	}

	update() {}
}

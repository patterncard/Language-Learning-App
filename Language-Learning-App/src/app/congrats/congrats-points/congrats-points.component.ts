import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'congrats-points',
	templateUrl: './congrats-points.component.html',
	styleUrls: ['./congrats-points.component.scss'],
})
export class CongratsPointsComponent implements OnInit {
	constructor(private primengConfig: PrimeNGConfig) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}
	continue() {}
}

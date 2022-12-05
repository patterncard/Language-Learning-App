import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsPointsComponent } from './congrats-points.component';

@NgModule({
	declarations: [CongratsPointsComponent],
	imports: [
		// CommonModule, BrowserModule,
		ButtonModule,
		SelectButtonModule,
	],
})
export class CongratsPointsModule {}

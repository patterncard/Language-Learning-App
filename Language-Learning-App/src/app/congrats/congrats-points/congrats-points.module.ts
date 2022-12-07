import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsPointsComponent } from './congrats-points.component';

@NgModule({
	declarations: [CongratsPointsComponent],
	imports: [ButtonModule, SelectButtonModule, RippleModule],
})
export class CongratsPointsModule {}

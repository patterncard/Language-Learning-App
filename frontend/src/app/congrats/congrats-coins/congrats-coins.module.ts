import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsCoinsComponent } from './congrats-coins.component';

@NgModule({
	declarations: [CongratsCoinsComponent],
	imports: [ButtonModule, SelectButtonModule, RippleModule],
})
export class CongratsCoinsModule {}

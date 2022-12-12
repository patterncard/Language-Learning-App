import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsFailureComponent } from './congrats-failure.component';

@NgModule({
	declarations: [CongratsFailureComponent],
	imports: [ButtonModule, SelectButtonModule, RippleModule],
})
export class CongratsFailureModule {}

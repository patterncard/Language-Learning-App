import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsLevelComponent } from './congrats-level.component';

@NgModule({
	declarations: [CongratsLevelComponent],
	imports: [ButtonModule, SelectButtonModule, RippleModule],
})
export class CongratsLevelModule {}

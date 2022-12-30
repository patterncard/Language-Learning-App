import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { HighscoreComponent } from './highscore.component';

@NgModule({
	declarations: [HighscoreComponent],
	imports: [CommonModule, ButtonModule, RippleModule, SelectButtonModule],
})
export class HighscoreModule {}

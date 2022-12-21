import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PictureComponent } from './picture.component';

@NgModule({
	declarations: [PictureComponent],
	imports: [CommonModule, ButtonModule, RippleModule],
})
export class PictureModule {}

import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CongratsCategoryComponent } from './congrats-category.component';

@NgModule({
	declarations: [CongratsCategoryComponent],
	imports: [ButtonModule, SelectButtonModule, RippleModule],
})
export class CongratsCategoryModule {}

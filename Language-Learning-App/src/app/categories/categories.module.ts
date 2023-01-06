import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UnlockHomophonesComponent } from './unlock-homophones/unlock-homophones.component';
import { ButtonModule } from 'primeng/button';
import { UnlockTransitionComponent } from './unlock-transition/unlock-transition.component';

@NgModule({
	declarations: [
		CategoriesComponent,
		UnlockHomophonesComponent,
		UnlockTransitionComponent,
	],
	imports: [
		CommonModule,
		DynamicDialogModule,
		ToastModule,
		TableModule,
		HttpClientModule,
		ReactiveFormsModule,
		ButtonModule,
	],
	entryComponents: [UnlockHomophonesComponent, UnlockTransitionComponent],
})
export class CategoriesModule {}

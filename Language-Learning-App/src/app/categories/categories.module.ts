import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoinsExchangeComponent } from './coins-exchange/coins-exchange.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [CategoriesComponent, CoinsExchangeComponent],
	imports: [
		CommonModule,
		DynamicDialogModule,
		ToastModule,
		TableModule,
		HttpClientModule,
		ReactiveFormsModule,
		ButtonModule,
	],
	entryComponents: [CoinsExchangeComponent],
})
export class CategoriesModule {}

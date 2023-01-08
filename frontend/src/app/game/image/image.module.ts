import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ImageComponent } from './image.component';

@NgModule({
	declarations: [ImageComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		InputTextModule,
		ButtonModule,
		RippleModule,
		ReactiveFormsModule,
		SelectButtonModule,
		FormsModule,
	],
})
export class ImageModule {}

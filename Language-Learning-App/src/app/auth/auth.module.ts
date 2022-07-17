import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './sign-up/sign-up.service';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [AuthComponent, SignUpComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AuthRoutingModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [SignUpService],
})
export class AuthModule {}

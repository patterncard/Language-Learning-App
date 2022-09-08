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
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AuthComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SignUpComponent],
})
export class AuthModule {}

import { Component, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ref: DynamicDialogRef;

  // ngOnInit(): void {}
  logIn() {}

  showSignUp() {
    this.ref = this.dialogService.open(SignUpComponent, {
      header: 'Sign Up',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}

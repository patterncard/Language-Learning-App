import { Component, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    public httpClient: HttpClient
  ) {}

  ref: DynamicDialogRef;

  // ngOnInit(): void {}
  username = new FormControl('');
  password = new FormControl('');

  logIn() {
    this.httpClient
      .post('http://localhost:1337/api/auth/local', {
        identifier: this.username.value,
        password: this.password.value,
      })
      .subscribe(
        (x) => {
          console.log(x);
        },
        (qweqweqwewy) => {
          console.log(qweqweqwewy);
        }
      );
  }


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

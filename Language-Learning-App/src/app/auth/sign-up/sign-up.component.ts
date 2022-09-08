import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private httpClient: HttpClient
  ) {}

  // ngOnInit() { }

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  signUp() {
    this.httpClient
      .post('http://localhost:1337/api/auth/local/register', {
        username: this.username.value,
        email: this.email.value,
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
}

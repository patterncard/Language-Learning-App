import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { SignUpService } from './sign-up.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    // private productService: SignUpService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private httpClient: HttpClient
  ) {}

  // ngOnInit() { }

  signUp() {
    this.httpClient
      .post('http://localhost:1337/api/auth/local/register', {
        email: 'a@a.com',
        username: 'qqwwewe',
        password: 'asdasdasdqwe',
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

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
		private httpClient: HttpClient,
		private router: Router
	) {}

	username = new FormControl('');
	email = new FormControl('');
	password = new FormControl('');

	signUp() {
		this.httpClient
			.post<{ jwt: string }>(
				'http://localhost:1337/api/auth/local/register',
				{
					username: this.username.value,
					email: this.email.value,
					password: this.password.value,
				}
			)
			.subscribe(
				(x) => {
					localStorage.setItem('token', x.jwt);
					this.router.navigateByUrl('/home');
				},
				(qweqweqwewy) => {
					console.log(qweqweqwewy);
				}
			);
	}
}

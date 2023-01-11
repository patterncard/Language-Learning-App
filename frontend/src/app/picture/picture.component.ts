import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import jwt_decode from 'jwt-decode';
import { Picture } from './picture.interface';
import { AchievementsService } from '../home/achievements.service';
import { User } from '../home/user.interface';

@Component({
	selector: 'picture',
	templateUrl: './picture.component.html',
	styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private httpClient: HttpClient,
		private achievements: AchievementsService
	) {}

	token!: string;
	decoded!: { id: string };
	id!: string;
	avatarUrl!: string;
	selectedFile!: any;
	picture!: Picture[];
	username: any;

	ngOnInit() {
		this.primengConfig.ripple = true;
		this.achievements.getUser().subscribe((user: User) => {
			this.username = user.username!;
			this.avatarUrl = user.avatar?.url!;
		});
	}

	onFileSelected(event: any) {
		console.log(event);
		this.selectedFile = <File>event.target.files[0];
	}

	onUpload() {
		this.decodeToken();
		const fd = new FormData();
		fd.append('files', this.selectedFile, this.selectedFile.name);
		this.httpClient
			.post('https://language-learn.onrender.com/api/upload', fd, {
				headers: { Authorization: `Bearer ${this.token}` },
			})
			.subscribe(
				(res: Picture) => {
					this.picture = res as Array<Picture>;
					const imageId = this.picture[0].id;
					this.httpClient
						.put(
							`https://language-learn.onrender.com/api/users/${this.id}`,
							{
								avatar: imageId,
							},
							{
								headers: {
									Authorization: `Bearer ${this.token}`,
								},
							}
						)
						.subscribe(
							(res) => {
								console.log(res);
								this.achievements
									.getUser()
									.subscribe((user: User) => {
										this.username = user.username!;
										this.avatarUrl = user.avatar?.url!;
									});
							},
							(e) => {
								console.log(e);
							}
						);
				},
				(e) => {
					console.log(e);
				}
			);
	}

	decodeToken() {
		this.token = localStorage.getItem('token')!;
		this.decoded = jwt_decode<{ id: string }>(this.token!);
		this.id = this.decoded.id;
	}

	goBackToSettings() {
		this.router.navigateByUrl('/settings');
	}
}

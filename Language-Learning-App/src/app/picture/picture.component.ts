import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import jwt_decode from 'jwt-decode';
import { Images } from '../game/image/images.interface';
import { Picture } from './picture.interface';
import { publishFacade } from '@angular/compiler';

@Component({
	selector: 'picture',
	templateUrl: './picture.component.html',
	styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
	constructor(
		private router: Router,
		private primengConfig: PrimeNGConfig,
		private httpClient: HttpClient
	) {}

	token!: string;
	decoded!: { id: string };
	id!: string;
	avatarUrl!: string;
	selectedFile!: any;
	picture!: Picture[];

	ngOnInit() {
		this.primengConfig.ripple = true;
	}

	onFileSelected(event: any) {
		console.log(event);
		this.selectedFile = <File>event.target.files[0];
	}

	onUpdate() {
		this.decodeToken();
		const fd = new FormData();
		fd.append('files', this.selectedFile, this.selectedFile.name);
		this.httpClient
			.post('http://localhost:1337/api/upload', fd, {
				headers: { Authorization: `Bearer ${this.token}` },
			})
			.subscribe(
				(res: Picture) => {
					this.picture = res as Array<Picture>;
					const imageId = this.picture[0].id;
					this.httpClient
						.put(
							`http://localhost:1337/api/users/${this.id}`,
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

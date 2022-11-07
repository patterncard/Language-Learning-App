import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
	providedIn: 'root',
})
export class AchievementsService {
	constructor(private httpClient: HttpClient) {}
	points = 0;
	level = 1;
	coins = 0;
	unlockedCategory1 = false;
	unlockedCategory2 = false;
	unlockedCategory3 = false;
	unlockedCategory4 = false;
	unlockedCategory5 = false;

	savePoints() {
		const token = localStorage.getItem('token');

		const decoded = jwt_decode<{ id: string }>(token!);
		const id = decoded.id;

		return this.httpClient
			.post(
				'http://localhost:1337/api/points',
				{
					data: {
						count: this.points,
						users_permissions_user: id,
					},
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.subscribe(
				(x) => {
					console.log({ x });
				},
				(qweqweqwewy) => {
					console.log({ qweqweqwewy });
				}
			);
	}

	getPoints() {
		const token = localStorage.getItem('token');
		const decoded = jwt_decode<{ id: string }>(token!);
		const id = decoded.id;

		return this.httpClient.get(
			'http://localhost:1337/api/points?populate=%2A',
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
	}
}

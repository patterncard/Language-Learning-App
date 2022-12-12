import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
	providedIn: 'root',
})
export class AchievementsService {
	token!: string;
	decoded!: { id: string };
	id!: string;
	totalPoints!: number;
	areExtraCoins = false;
	constructor(private httpClient: HttpClient) {}
	points = 0;
	level = 1;
	coins = 0;
	unlockedCategory1 = false;
	unlockedCategory2 = false;
	unlockedCategory3 = false;
	unlockedCategory4 = false;
	unlockedCategory5 = false;

	decodeToken() {
		this.token = localStorage.getItem('token')!;
		this.decoded = jwt_decode<{ id: string }>(this.token!);
		this.id = this.decoded.id;
	}

	getUser() {
		this.decodeToken();
		return this.httpClient.get(
			`http://localhost:1337/api/users/${this.id}`,
			{
				headers: { Authorization: `Bearer ${this.token}` },
			}
		);
	}

	addPoints(newPoints: number) {
		this.points += newPoints;
		console.log({ points: this.points });
		if (!(this.points % 30)) {
			this.areExtraCoins = true;
		}
	}

	sumPoints(previousPoints: any) {
		console.log(previousPoints);
		console.log(this.points);
		this.totalPoints = this.points + previousPoints;
		console.log({ totalPoints: this.totalPoints });
	}

	sumCoins(previousPoints: number) {
		this.coins = previousPoints += 5;
		console.log({ coins: this.coins });
	}

	savePoints() {
		this.decodeToken();
		return this.httpClient
			.put(
				`http://localhost:1337/api/users/${this.id}`,
				{
					points: this.totalPoints,
				},
				{ headers: { Authorization: `Bearer ${this.token}` } }
			)
			.subscribe(
				(x) => {
					console.log({ x });
				},
				(y) => {
					console.log({ y });
				}
			);
	}

	saveCoins() {
		this.decodeToken();
		return this.httpClient
			.put(
				`http://localhost:1337/api/users/${this.id}`,
				{
					coins: this.coins,
				},
				{ headers: { Authorization: `Bearer ${this.token}` } }
			)
			.subscribe(
				(x) => {
					console.log({ x });
				},
				(y) => {
					console.log({ y });
				}
			);
	}
}

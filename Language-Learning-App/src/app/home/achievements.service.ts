import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { GameService } from '../game/game.service';
import { User } from './user.interface';

@Injectable({
	providedIn: 'root',
})
export class AchievementsService {
	constructor(
		private httpClient: HttpClient,
		private gameService: GameService
	) {}
	token!: string;
	decoded!: { id: string };
	id!: string;
	totalPoints!: number;
	areExtraCoins = false;
	points = 0;
	level = 1;
	coins = 0;
	unlockedCategory1 = false;
	unlockedCategory2 = false;
	unlockedCategory3 = false;
	unlockedCategory4 = false;
	unlockedCategory5 = false;
	pointsUntilNext = 0;
	pointsUntilNextCount = 50;
	highestScorePoints = 0;
	isNextLevel = false;
	currentPoints = 0;
	isNextCategoryUnlocked = false;
	isReadyForExtraCategory = false;

	decodeToken() {
		this.token = localStorage.getItem('token')!;
		this.decoded = jwt_decode<{ id: string }>(this.token!);
		this.id = this.decoded.id;
	}

	getUser() {
		this.decodeToken();
		return this.httpClient.get(
			`http://localhost:1337/api/users/${this.id}?populate=*`,
			{
				headers: { Authorization: `Bearer ${this.token}` },
			}
		);
	}

	addPoints(newPoints: number) {
		this.points += newPoints;
		console.log({ points: this.points });
		if (this.points > this.highestScorePoints)
			this.highestScorePoints = this.points;
		if (!(this.highestScorePoints % 100)) {
			this.areExtraCoins = true;
		}
		if (!(this.highestScorePoints % 50)) {
			this.isNextCategoryUnlocked = true;
			this.unlockNextCategory();
		}
		this.getPoints();
	}

	sumPoints(previousPoints: any) {
		console.log(previousPoints);
		console.log(this.points);
		this.totalPoints = this.points + previousPoints;
		console.log({ totalPoints: this.totalPoints });
	}

	sumCoins(previousCoins: number) {
		this.coins = previousCoins += 5;
		console.log({ coins: this.coins });
	}

	sumLevel(previousLevel: number): number {
		console.log({ level: this.level });
		return (this.level = previousLevel + 1);
	}

	getPoints() {
		this.decodeToken();
		this.httpClient
			.get(`http://localhost:1337/api/users/${this.id}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			})
			.subscribe((user: User) => {
				this.currentPoints = user.points!;
				console.log({ currentPoints: this.currentPoints });
				console.log(this.currentPoints + this.points);
				if (this.currentPoints + this.points === 1000) {
					this.isNextLevel = true;
					if (this.isNextLevel)
						console.log({ isNextLevel: this.isNextLevel });
					this.points = 0;
					this.savePointsAfterLevelCompletion();
				}
			});
		console.log({ currentPoints: this.currentPoints });
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

	savePointsAfterLevelCompletion() {
		this.decodeToken();
		return this.httpClient
			.put(
				`http://localhost:1337/api/users/${this.id}`,
				{
					points: this.points,
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

	saveLevel() {
		this.decodeToken();
		return this.httpClient
			.put(
				`http://localhost:1337/api/users/${this.id}`,
				{
					level: this.level,
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

	unlockNextCategory() {
		this.decodeToken();

		if (
			this.unlockedCategory1 &&
			this.unlockedCategory2 &&
			!this.unlockedCategory3 &&
			this.gameService.selectedCategory === 'family'
		) {
			this.unlockedCategory3 = true;
			this.httpClient
				.put(
					`http://localhost:1337/api/users/${this.id}`,
					{
						isanimalsunlocked: true,
					},
					{ headers: { Authorization: `Bearer ${this.token}` } }
				)
				.subscribe();
		}

		if (
			this.unlockedCategory1 &&
			!this.unlockedCategory2 &&
			this.gameService.selectedCategory === 'home'
		) {
			this.unlockedCategory2 = true;
			this.httpClient
				.put(
					`http://localhost:1337/api/users/${this.id}`,
					{
						isfamilyunlocked: true,
					},
					{ headers: { Authorization: `Bearer ${this.token}` } }
				)
				.subscribe();
		}

		if (
			!this.unlockedCategory1 &&
			this.gameService.selectedCategory === 'food'
		) {
			this.unlockedCategory1 = true;
			this.httpClient
				.put(
					`http://localhost:1337/api/users/${this.id}`,
					{
						ishomeunlocked: true,
					},
					{ headers: { Authorization: `Bearer ${this.token}` } }
				)
				.subscribe();
		}
	}
}

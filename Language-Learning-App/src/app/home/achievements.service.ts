import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AchievementsService {
	constructor() {}
	points = 0;
	level = 1;
	coins = 0;
	unlockedCategory1 = false;
	unlockedCategory2 = false;
	unlockedCategory3 = false;
	unlockedCategory4 = false;
	unlockedCategory5 = false;
}

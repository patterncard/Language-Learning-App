import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AchievementsService {
    constructor() {}
    points = 0;
    level = 0;
    coins = 0;
}

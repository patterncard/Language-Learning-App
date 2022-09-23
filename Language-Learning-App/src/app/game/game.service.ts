import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    constructor() { }

    words = {
        food: [
            {
                en: 'water',
                pl: 'woda',
            },
            {
                en: 'egg',
                pl: 'jajko',
            },
        ],
    };

}

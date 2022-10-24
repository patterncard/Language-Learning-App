import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	constructor() {}

	selectedCategory: any;
	selectedGameRoutes: any;

	gameRoutes = ['flashcard', 'sentence'];

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
			{
				en: 'apple',
				pl: 'jabłko',
			},
			{
				en: 'cheese',
				pl: 'ser',
			},
			{
				en: 'apricot',
				pl: 'morela',
			},
			{
				en: 'carrot',
				pl: 'marchewka',
			},
			{
				en: 'milk',
				pl: 'mleko',
			},
			{
				en: 'rice',
				pl: 'ryż',
			},
			{
				en: 'chicken',
				pl: 'kurczak',
			},
			{
				en: 'fish',
				pl: 'ryba',
			},
		],
		home: [
			{
				en: 'room',
				pl: 'pokój',
			},
			{
				en: 'bedroom',
				pl: 'sypialnia',
			},
			{
				en: 'house',
				pl: 'dom',
			},
			{
				en: 'kitchen',
				pl: 'kuchnia',
			},
			{
				en: 'bathroom',
				pl: 'łazienka',
			},
			{
				en: 'bed',
				pl: 'łóżko',
			},
			{
				en: 'table',
				pl: 'stół',
			},
			{
				en: 'chair',
				pl: 'krzesło',
			},
			{
				en: 'living room',
				pl: 'salon',
			},
			{
				en: 'office',
				pl: 'gabinet',
			},
		],
		family: [
			{
				en: 'family',
				pl: 'rodzina',
			},
			{
				en: 'mom',
				pl: 'mama',
			},
			{
				en: 'dad',
				pl: 'tata',
			},
			{
				en: 'brother',
				pl: 'brat',
			},
			{
				en: 'sister',
				pl: 'siostra',
			},
			{
				en: 'daughter',
				pl: 'córka',
			},
			{
				en: 'child',
				pl: 'dziecko',
			},
			{
				en: 'children',
				pl: 'dzieci',
			},
			{
				en: 'grandma',
				pl: 'babcia',
			},
			{
				en: 'grandpa',
				pl: 'dziadek',
			},
		],
		animals: [
			{
				en: 'bear',
				pl: 'niedźwiedź',
			},
			{
				en: 'bird',
				pl: 'ptak',
			},
			{
				en: 'cat',
				pl: 'kot',
			},
			{
				en: 'cow',
				pl: 'krowa',
			},
			{
				en: 'dog',
				pl: 'pies',
			},
			{
				en: 'duck',
				pl: 'kaczka',
			},
			{
				en: 'elephant',
				pl: 'słoń',
			},
			{
				en: 'horse',
				pl: 'koń',
			},
			{
				en: 'frog',
				pl: 'żaba',
			},
			{
				en: 'rabbit',
				pl: 'królik',
			},
		],
		homophones: [
			{
				en: 'rode - road',
				pl: 'jechał - droga',
			},
			{
				en: 'sauce - source',
				pl: 'sos - źródło',
			},
			{
				en: 'scene - seen',
				pl: 'scena - widziany',
			},
			{
				en: 'see - sea',
				pl: 'widzieć - morze',
			},
			{
				en: 'for - four',
				pl: 'dla - cztery',
			},
			{
				en: 'brake - break',
				pl: 'hamulec - przerwa',
			},
			{
				en: 'know - no',
				pl: 'wiedzieć - nie',
			},
			{
				en: 'our - hour',
				pl: 'nasz - godzina',
			},
			{
				en: 'buy - bye',
				pl: 'kupować - do widzenia',
			},
			{
				en: 'too - two',
				pl: 'też - dwa',
			},
		],
		transition: [
			{
				en: 'accordingly',
				pl: 'odpowiednio',
			},
			{
				en: 'briefly',
				pl: 'krótko',
			},
			{
				en: 'contrary to',
				pl: 'przeciwnie do',
			},
			{
				en: 'definitely',
				pl: 'zdecydowanie',
			},
			{
				en: 'either',
				pl: 'zarówno',
			},
			{
				en: 'for this reason',
				pl: 'z tego powodu',
			},
			{
				en: 'granted that',
				pl: 'zakładając, że',
			},
			{
				en: 'hence',
				pl: 'stąd',
			},
			{
				en: 'in a nutshell',
				pl: 'w skrócie',
			},
			{
				en: 'nevertheless',
				pl: 'niemniej jednak',
			},
		],
		formality: [
			{
				en: 'older',
				pl: 'senior',
			},
			{
				en: 'see',
				pl: 'perceive',
			},
			{
				en: 'deal with',
				pl: 'manage',
			},
			{
				en: 'test',
				pl: 'experiment',
			},
			{
				en: 'imagine',
				pl: 'envisage',
			},
			{
				en: 'remove',
				pl: 'eliminate',
			},
			{
				en: 'throw away',
				pl: 'discard',
			},
			{
				en: 'big',
				pl: 'enormous',
			},
			{
				en: 'a bit',
				pl: 'a little',
			},
			{
				en: 'end',
				pl: 'terminate',
			},
		],
	};

	sentences = {
		food: [
			{
				en: 'water',
				pl: 'woda',
			},
			{
				en: 'egg',
				pl: 'jajko',
			},
			{
				en: 'apple',
				pl: 'jabłko',
			},
			{
				en: 'cheese',
				pl: 'ser',
			},
			{
				en: 'apricot',
				pl: 'morela',
			},
			{
				en: 'carrot',
				pl: 'marchewka',
			},
			{
				en: 'milk',
				pl: 'mleko',
			},
			{
				en: 'rice',
				pl: 'ryż',
			},
			{
				en: 'chicken',
				pl: 'kurczak',
			},
			{
				en: 'fish',
				pl: 'ryba',
			},
		],
		home: [
			{
				en: 'room',
				pl: 'pokój',
			},
			{
				en: 'bedroom',
				pl: 'sypialnia',
			},
			{
				en: 'house',
				pl: 'dom',
			},
			{
				en: 'kitchen',
				pl: 'kuchnia',
			},
			{
				en: 'bathroom',
				pl: 'łazienka',
			},
			{
				en: 'bed',
				pl: 'łóżko',
			},
			{
				en: 'table',
				pl: 'stół',
			},
			{
				en: 'chair',
				pl: 'krzesło',
			},
			{
				en: 'living room',
				pl: 'salon',
			},
			{
				en: 'office',
				pl: 'gabinet',
			},
		],
		family: [
			{
				en: 'family',
				pl: 'rodzina',
			},
			{
				en: 'mom',
				pl: 'mama',
			},
			{
				en: 'dad',
				pl: 'tata',
			},
			{
				en: 'brother',
				pl: 'brat',
			},
			{
				en: 'sister',
				pl: 'siostra',
			},
			{
				en: 'daughter',
				pl: 'córka',
			},
			{
				en: 'child',
				pl: 'dziecko',
			},
			{
				en: 'children',
				pl: 'dzieci',
			},
			{
				en: 'grandma',
				pl: 'babcia',
			},
			{
				en: 'grandpa',
				pl: 'dziadek',
			},
		],
		animals: [
			{
				en: 'bear',
				pl: 'niedźwiedź',
			},
			{
				en: 'bird',
				pl: 'ptak',
			},
			{
				en: 'cat',
				pl: 'kot',
			},
			{
				en: 'cow',
				pl: 'krowa',
			},
			{
				en: 'dog',
				pl: 'pies',
			},
			{
				en: 'duck',
				pl: 'kaczka',
			},
			{
				en: 'elephant',
				pl: 'słoń',
			},
			{
				en: 'horse',
				pl: 'koń',
			},
			{
				en: 'frog',
				pl: 'żaba',
			},
			{
				en: 'rabbit',
				pl: 'królik',
			},
		],
		homophones: [
			{
				en: 'rode - road',
				pl: 'jechał - droga',
			},
			{
				en: 'sauce - source',
				pl: 'sos - źródło',
			},
			{
				en: 'scene - seen',
				pl: 'scena - widziany',
			},
			{
				en: 'see - sea',
				pl: 'widzieć - morze',
			},
			{
				en: 'for - four',
				pl: 'dla - cztery',
			},
			{
				en: 'brake - break',
				pl: 'hamulec - przerwa',
			},
			{
				en: 'know - no',
				pl: 'wiedzieć - nie',
			},
			{
				en: 'our - hour',
				pl: 'nasz - godzina',
			},
			{
				en: 'buy - bye',
				pl: 'kupować - do widzenia',
			},
			{
				en: 'too - two',
				pl: 'też - dwa',
			},
		],
		transition: [
			{
				en: 'accordingly',
				pl: 'odpowiednio',
			},
			{
				en: 'briefly',
				pl: 'krótko',
			},
			{
				en: 'contrary to',
				pl: 'przeciwnie do',
			},
			{
				en: 'definitely',
				pl: 'zdecydowanie',
			},
			{
				en: 'either',
				pl: 'zarówno',
			},
			{
				en: 'for this reason',
				pl: 'z tego powodu',
			},
			{
				en: 'granted that',
				pl: 'zakładając, że',
			},
			{
				en: 'hence',
				pl: 'stąd',
			},
			{
				en: 'in a nutshell',
				pl: 'w skrócie',
			},
			{
				en: 'nevertheless',
				pl: 'niemniej jednak',
			},
		],
		formality: [
			{
				en: 'older',
				pl: 'senior',
			},
			{
				en: 'see',
				pl: 'perceive',
			},
			{
				en: 'deal with',
				pl: 'manage',
			},
			{
				en: 'test',
				pl: 'experiment',
			},
			{
				en: 'imagine',
				pl: 'envisage',
			},
			{
				en: 'remove',
				pl: 'eliminate',
			},
			{
				en: 'throw away',
				pl: 'discard',
			},
			{
				en: 'big',
				pl: 'enormous',
			},
			{
				en: 'a bit',
				pl: 'a little',
			},
			{
				en: 'end',
				pl: 'terminate',
			},
		],
	};
}

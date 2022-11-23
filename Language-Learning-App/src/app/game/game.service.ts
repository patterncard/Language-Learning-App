import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	selectedCategory: any;
	selectedGameRoutes: any;
	selectedGameType: any;

	gameRoutes = ['flashcard', 'sentence', 'image'];

	words: any;
	sentences: any;
	images: any;

	// words = {
	// 	food: [
	// 		{
	// 			en: 'water',
	// 			pl: 'woda',
	// 		},
	// 		{
	// 			en: 'egg',
	// 			pl: 'jajko',
	// 		},
	// 		{
	// 			en: 'apple',
	// 			pl: 'jabłko',
	// 		},
	// 		{
	// 			en: 'cheese',
	// 			pl: 'ser',
	// 		},
	// 		{
	// 			en: 'apricot',
	// 			pl: 'morela',
	// 		},
	// 		{
	// 			en: 'carrot',
	// 			pl: 'marchewka',
	// 		},
	// 		{
	// 			en: 'milk',
	// 			pl: 'mleko',
	// 		},
	// 		{
	// 			en: 'rice',
	// 			pl: 'ryż',
	// 		},
	// 		{
	// 			en: 'chicken',
	// 			pl: 'kurczak',
	// 		},
	// 		{
	// 			en: 'fish',
	// 			pl: 'ryba',
	// 		},
	// 	],
	// 	home: [
	// 		{
	// 			en: 'room',
	// 			pl: 'pokój',
	// 		},
	// 		{
	// 			en: 'bedroom',
	// 			pl: 'sypialnia',
	// 		},
	// 		{
	// 			en: 'house',
	// 			pl: 'dom',
	// 		},
	// 		{
	// 			en: 'kitchen',
	// 			pl: 'kuchnia',
	// 		},
	// 		{
	// 			en: 'bathroom',
	// 			pl: 'łazienka',
	// 		},
	// 		{
	// 			en: 'bed',
	// 			pl: 'łóżko',
	// 		},
	// 		{
	// 			en: 'table',
	// 			pl: 'stół',
	// 		},
	// 		{
	// 			en: 'chair',
	// 			pl: 'krzesło',
	// 		},
	// 		{
	// 			en: 'living room',
	// 			pl: 'salon',
	// 		},
	// 		{
	// 			en: 'office',
	// 			pl: 'gabinet',
	// 		},
	// 	],
	// 	family: [
	// 		{
	// 			en: 'family',
	// 			pl: 'rodzina',
	// 		},
	// 		{
	// 			en: 'mom',
	// 			pl: 'mama',
	// 		},
	// 		{
	// 			en: 'dad',
	// 			pl: 'tata',
	// 		},
	// 		{
	// 			en: 'brother',
	// 			pl: 'brat',
	// 		},
	// 		{
	// 			en: 'sister',
	// 			pl: 'siostra',
	// 		},
	// 		{
	// 			en: 'daughter',
	// 			pl: 'córka',
	// 		},
	// 		{
	// 			en: 'child',
	// 			pl: 'dziecko',
	// 		},
	// 		{
	// 			en: 'children',
	// 			pl: 'dzieci',
	// 		},
	// 		{
	// 			en: 'grandma',
	// 			pl: 'babcia',
	// 		},
	// 		{
	// 			en: 'grandpa',
	// 			pl: 'dziadek',
	// 		},
	// 	],
	// 	animals: [
	// 		{
	// 			en: 'bear',
	// 			pl: 'niedźwiedź',
	// 		},
	// 		{
	// 			en: 'bird',
	// 			pl: 'ptak',
	// 		},
	// 		{
	// 			en: 'cat',
	// 			pl: 'kot',
	// 		},
	// 		{
	// 			en: 'cow',
	// 			pl: 'krowa',
	// 		},
	// 		{
	// 			en: 'dog',
	// 			pl: 'pies',
	// 		},
	// 		{
	// 			en: 'duck',
	// 			pl: 'kaczka',
	// 		},
	// 		{
	// 			en: 'elephant',
	// 			pl: 'słoń',
	// 		},
	// 		{
	// 			en: 'horse',
	// 			pl: 'koń',
	// 		},
	// 		{
	// 			en: 'frog',
	// 			pl: 'żaba',
	// 		},
	// 		{
	// 			en: 'rabbit',
	// 			pl: 'królik',
	// 		},
	// 	],
	// 	homophones: [
	// 		{
	// 			en: 'rode - road',
	// 			pl: 'jechał - droga',
	// 		},
	// 		{
	// 			en: 'sauce - source',
	// 			pl: 'sos - źródło',
	// 		},
	// 		{
	// 			en: 'scene - seen',
	// 			pl: 'scena - widziany',
	// 		},
	// 		{
	// 			en: 'see - sea',
	// 			pl: 'widzieć - morze',
	// 		},
	// 		{
	// 			en: 'for - four',
	// 			pl: 'dla - cztery',
	// 		},
	// 		{
	// 			en: 'brake - break',
	// 			pl: 'hamulec - przerwa',
	// 		},
	// 		{
	// 			en: 'know - no',
	// 			pl: 'wiedzieć - nie',
	// 		},
	// 		{
	// 			en: 'our - hour',
	// 			pl: 'nasz - godzina',
	// 		},
	// 		{
	// 			en: 'buy - bye',
	// 			pl: 'kupować - do widzenia',
	// 		},
	// 		{
	// 			en: 'too - two',
	// 			pl: 'też - dwa',
	// 		},
	// 	],
	// 	transition: [
	// 		{
	// 			en: 'accordingly',
	// 			pl: 'odpowiednio',
	// 		},
	// 		{
	// 			en: 'briefly',
	// 			pl: 'krótko',
	// 		},
	// 		{
	// 			en: 'contrary to',
	// 			pl: 'przeciwnie do',
	// 		},
	// 		{
	// 			en: 'definitely',
	// 			pl: 'zdecydowanie',
	// 		},
	// 		{
	// 			en: 'either',
	// 			pl: 'zarówno',
	// 		},
	// 		{
	// 			en: 'for this reason',
	// 			pl: 'z tego powodu',
	// 		},
	// 		{
	// 			en: 'granted that',
	// 			pl: 'zakładając, że',
	// 		},
	// 		{
	// 			en: 'hence',
	// 			pl: 'stąd',
	// 		},
	// 		{
	// 			en: 'in a nutshell',
	// 			pl: 'w skrócie',
	// 		},
	// 		{
	// 			en: 'nevertheless',
	// 			pl: 'niemniej jednak',
	// 		},
	// 	],
	// 	formality: [
	// 		{
	// 			en: 'older',
	// 			pl: 'senior',
	// 		},
	// 		{
	// 			en: 'see',
	// 			pl: 'perceive',
	// 		},
	// 		{
	// 			en: 'deal with',
	// 			pl: 'manage',
	// 		},
	// 		{
	// 			en: 'test',
	// 			pl: 'experiment',
	// 		},
	// 		{
	// 			en: 'imagine',
	// 			pl: 'envisage',
	// 		},
	// 		{
	// 			en: 'remove',
	// 			pl: 'eliminate',
	// 		},
	// 		{
	// 			en: 'throw away',
	// 			pl: 'discard',
	// 		},
	// 		{
	// 			en: 'big',
	// 			pl: 'enormous',
	// 		},
	// 		{
	// 			en: 'a bit',
	// 			pl: 'a little',
	// 		},
	// 		{
	// 			en: 'end',
	// 			pl: 'terminate',
	// 		},
	// 	],
	// };

	// sentences = {
	// 	food: [
	// 		{
	// 			en: {
	// 				part1: 'Pure natural ',
	// 				gap: 'water',
	// 				part2: ' from a stream or brook',
	// 			},
	// 			pl: {
	// 				part1: 'Czysta naturalna ',
	// 				gap: 'woda',
	// 				part2: ' ze strumienia lub potoku',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Pudding made of corn and cream and ',
	// 				gap: 'egg',
	// 				part2: '',
	// 			},
	// 			pl: {
	// 				part1: 'Budyń z kukurydzy i śmietany i ',
	// 				gap: 'jajka',
	// 				part2: '',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Large ',
	// 				gap: 'apple',
	// 				part2: 'with a red skin',
	// 			},
	// 			pl: {
	// 				part1: 'Duże',
	// 				gap: 'jabłko',
	// 				part2: 'z czerwoną skórką',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Quiche made with',
	// 				gap: 'cheese ',
	// 				part2: ' and bacon',
	// 			},
	// 			pl: {
	// 				part1: 'Quiche z',
	// 				gap: 'serem',
	// 				part2: 'i boczkiem',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Sweet liqueur made from wine and brandy flavored with plum or peach or',
	// 				gap: 'apricot ',
	// 				part2: 'kernels and bitter almonds',
	// 			},
	// 			pl: {
	// 				part1: 'Słodki likier z wina i brandy o smaku śliwki lub brzoskwini lub pestek',
	// 				gap: 'moreli',
	// 				part2: 'i gorzkich migdałów',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: '',
	// 				gap: 'Carrot',
	// 				part2: 'and stick',
	// 			},
	// 			pl: {
	// 				part1: '',
	// 				gap: 'Marchewka',
	// 				part2: 'i kij',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Watery part of ',
	// 				gap: 'milk',
	// 				part2: 'is produced when raw milk sours and coagulates',
	// 			},
	// 			pl: {
	// 				part1: 'Wodnista część',
	// 				gap: 'mleka',
	// 				part2: 'powstaje, gdy surowe mleko kwaśnieje i koaguluje',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Puffy ',
	// 				gap: 'rice',
	// 				part2: 'kernels',
	// 			},
	// 			pl: {
	// 				part1: 'Ziarna',
	// 				gap: 'ryżu',
	// 				part2: 'dmuchanego',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'Take out the ',
	// 				gap: 'chicken',
	// 				part2: 'after adding the vegetables',
	// 			},
	// 			pl: {
	// 				part1: 'Wyjmij',
	// 				gap: 'kurczaka',
	// 				part2: 'po dodaniu warzyw',
	// 			},
	// 		},
	// 		{
	// 			en: {
	// 				part1: 'A small',
	// 				gap: 'fish',
	// 				part2: 'of the genus Sillago',
	// 			},
	// 			pl: {
	// 				part1: 'Mała',
	// 				gap: 'ryba',
	// 				part2: 'z rodzaju Sillago',
	// 			},
	// 		},
	// 	],
	// 	home: [
	// 		{
	// 			en: 'room',
	// 			pl: 'pokój',
	// 		},
	// 		{
	// 			en: 'bedroom',
	// 			pl: 'sypialnia',
	// 		},
	// 		{
	// 			en: 'house',
	// 			pl: 'dom',
	// 		},
	// 		{
	// 			en: 'kitchen',
	// 			pl: 'kuchnia',
	// 		},
	// 		{
	// 			en: 'bathroom',
	// 			pl: 'łazienka',
	// 		},
	// 		{
	// 			en: 'bed',
	// 			pl: 'łóżko',
	// 		},
	// 		{
	// 			en: 'table',
	// 			pl: 'stół',
	// 		},
	// 		{
	// 			en: 'chair',
	// 			pl: 'krzesło',
	// 		},
	// 		{
	// 			en: 'living room',
	// 			pl: 'salon',
	// 		},
	// 		{
	// 			en: 'office',
	// 			pl: 'gabinet',
	// 		},
	// 	],
	// 	family: [
	// 		{
	// 			en: 'family',
	// 			pl: 'rodzina',
	// 		},
	// 		{
	// 			en: 'mom',
	// 			pl: 'mama',
	// 		},
	// 		{
	// 			en: 'dad',
	// 			pl: 'tata',
	// 		},
	// 		{
	// 			en: 'brother',
	// 			pl: 'brat',
	// 		},
	// 		{
	// 			en: 'sister',
	// 			pl: 'siostra',
	// 		},
	// 		{
	// 			en: 'daughter',
	// 			pl: 'córka',
	// 		},
	// 		{
	// 			en: 'child',
	// 			pl: 'dziecko',
	// 		},
	// 		{
	// 			en: 'children',
	// 			pl: 'dzieci',
	// 		},
	// 		{
	// 			en: 'grandma',
	// 			pl: 'babcia',
	// 		},
	// 		{
	// 			en: 'grandpa',
	// 			pl: 'dziadek',
	// 		},
	// 	],
	// 	animals: [
	// 		{
	// 			en: 'bear',
	// 			pl: 'niedźwiedź',
	// 		},
	// 		{
	// 			en: 'bird',
	// 			pl: 'ptak',
	// 		},
	// 		{
	// 			en: 'cat',
	// 			pl: 'kot',
	// 		},
	// 		{
	// 			en: 'cow',
	// 			pl: 'krowa',
	// 		},
	// 		{
	// 			en: 'dog',
	// 			pl: 'pies',
	// 		},
	// 		{
	// 			en: 'duck',
	// 			pl: 'kaczka',
	// 		},
	// 		{
	// 			en: 'elephant',
	// 			pl: 'słoń',
	// 		},
	// 		{
	// 			en: 'horse',
	// 			pl: 'koń',
	// 		},
	// 		{
	// 			en: 'frog',
	// 			pl: 'żaba',
	// 		},
	// 		{
	// 			en: 'rabbit',
	// 			pl: 'królik',
	// 		},
	// 	],
	// 	homophones: [
	// 		{
	// 			en: 'rode - road',
	// 			pl: 'jechał - droga',
	// 		},
	// 		{
	// 			en: 'sauce - source',
	// 			pl: 'sos - źródło',
	// 		},
	// 		{
	// 			en: 'scene - seen',
	// 			pl: 'scena - widziany',
	// 		},
	// 		{
	// 			en: 'see - sea',
	// 			pl: 'widzieć - morze',
	// 		},
	// 		{
	// 			en: 'for - four',
	// 			pl: 'dla - cztery',
	// 		},
	// 		{
	// 			en: 'brake - break',
	// 			pl: 'hamulec - przerwa',
	// 		},
	// 		{
	// 			en: 'know - no',
	// 			pl: 'wiedzieć - nie',
	// 		},
	// 		{
	// 			en: 'our - hour',
	// 			pl: 'nasz - godzina',
	// 		},
	// 		{
	// 			en: 'buy - bye',
	// 			pl: 'kupować - do widzenia',
	// 		},
	// 		{
	// 			en: 'too - two',
	// 			pl: 'też - dwa',
	// 		},
	// 	],
	// 	transition: [
	// 		{
	// 			en: 'accordingly',
	// 			pl: 'odpowiednio',
	// 		},
	// 		{
	// 			en: 'briefly',
	// 			pl: 'krótko',
	// 		},
	// 		{
	// 			en: 'contrary to',
	// 			pl: 'przeciwnie do',
	// 		},
	// 		{
	// 			en: 'definitely',
	// 			pl: 'zdecydowanie',
	// 		},
	// 		{
	// 			en: 'either',
	// 			pl: 'zarówno',
	// 		},
	// 		{
	// 			en: 'for this reason',
	// 			pl: 'z tego powodu',
	// 		},
	// 		{
	// 			en: 'granted that',
	// 			pl: 'zakładając, że',
	// 		},
	// 		{
	// 			en: 'hence',
	// 			pl: 'stąd',
	// 		},
	// 		{
	// 			en: 'in a nutshell',
	// 			pl: 'w skrócie',
	// 		},
	// 		{
	// 			en: 'nevertheless',
	// 			pl: 'niemniej jednak',
	// 		},
	// 	],
	// 	formality: [
	// 		{
	// 			en: 'older',
	// 			pl: 'senior',
	// 		},
	// 		{
	// 			en: 'see',
	// 			pl: 'perceive',
	// 		},
	// 		{
	// 			en: 'deal with',
	// 			pl: 'manage',
	// 		},
	// 		{
	// 			en: 'test',
	// 			pl: 'experiment',
	// 		},
	// 		{
	// 			en: 'imagine',
	// 			pl: 'envisage',
	// 		},
	// 		{
	// 			en: 'remove',
	// 			pl: 'eliminate',
	// 		},
	// 		{
	// 			en: 'throw away',
	// 			pl: 'discard',
	// 		},
	// 		{
	// 			en: 'big',
	// 			pl: 'enormous',
	// 		},
	// 		{
	// 			en: 'a bit',
	// 			pl: 'a little',
	// 		},
	// 		{
	// 			en: 'end',
	// 			pl: 'terminate',
	// 		},
	// 	],
	// };

	// images = {
	// 	food: [
	// 		{
	// 			en: 'water',
	// 			pl: 'woda',
	// 		},
	// 		{
	// 			en: 'egg',
	// 			pl: 'jajko',
	// 		},
	// 		{
	// 			en: 'apple',
	// 			pl: 'jabłko',
	// 		},
	// 		{
	// 			en: 'cheese',
	// 			pl: 'ser',
	// 		},
	// 		{
	// 			en: 'apricot',
	// 			pl: 'morela',
	// 		},
	// 		{
	// 			en: 'carrot',
	// 			pl: 'marchewka',
	// 		},
	// 		{
	// 			en: 'milk',
	// 			pl: 'mleko',
	// 		},
	// 		{
	// 			en: 'rice',
	// 			pl: 'ryż',
	// 		},
	// 		{
	// 			en: 'chicken',
	// 			pl: 'kurczak',
	// 		},
	// 		{
	// 			en: 'fish',
	// 			pl: 'ryba',
	// 		},
	// 	],
	// };
}

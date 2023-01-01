export class User {
	id?: number;
	username?: string;
	points?: number;
	level?: number;
	coins?: number;
	avatar?: {
		url: string;
	};
	ishomeunlocked?: boolean;
	isfamilyunlocked?: boolean;
	isanimalsunlocked?: boolean;
	ishomophonesunlocked?: boolean;
	istransitionunlocked?: boolean;
}

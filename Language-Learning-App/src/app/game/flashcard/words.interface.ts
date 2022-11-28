export class Words {
	data?: [
		{
			id?: string;
			flashcard: { en?: string; pl?: string };
			attributes: {
				en?: string;
				pl?: string;
				flashcard: { en?: string; pl?: string };
			};
		}
	];
}

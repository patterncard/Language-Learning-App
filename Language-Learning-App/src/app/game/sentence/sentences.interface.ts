export class Sentences {
	data?: [
		{
			id?: string;
			sentences: { en?: string; pl?: string };
			attributes: {
				enPart1: string;
				enGap: string;
				enPart2: string;
				plPart1: string;
				plGap: string;
				plPart2: string;
			};
		}
	];
}

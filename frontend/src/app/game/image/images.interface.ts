export class Images {
	data?: [
		{
			id?: number;
			attributes: {
				en: string;
				pl: string;
				image: {
					data: {
						id: number;
						attributes: {
							url: string;
						};
					};
				};
				category: {
					data: {
						id: number;
						attributes: {
							name: string;
						};
					};
				};
			};
		}
	];
}

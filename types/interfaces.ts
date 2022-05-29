interface IDestination {
	title: string;
	description: string;
	imageURL: string;
	averageDistance: string;
	estimatedTravelTime: string;
}

interface ICrew {
	title: string;
	name: string;
	description: string;
	imageURL: string;
}

export type { IDestination, ICrew };

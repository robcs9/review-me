/* export type Track = {
	trackId: number;

	trackName: string;

	albumId: number;

	albumTitle: string;

	artistId: number;

	artistName: string;

	genre: string;
}; */

export type Review = {
	
	reviewId?: number;

	qualidade: ('Muito Satisfeito' | 'Satisfeito' | 'Neutro' | 
		'Insatisfeito' | 'Muito Insatisfeito' | undefined
	);
	comentario: string | undefined;
	cordialidade: number;
	apresentacao: number;
	temperatura: number;
	sabor: number;
	higiene: number;
}
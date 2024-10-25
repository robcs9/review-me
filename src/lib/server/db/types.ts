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

	qualidade: string;
	// qualidade: "SATISFEITO" | "INSATISFEITO" | ...;

	comentario: string;

	cordialidade: number;

	apresentacao: number;

	temperatura: number;

	sabor: number;

	higiene: number;

}
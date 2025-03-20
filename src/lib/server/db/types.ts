export type Review = {
	// reviewId?: number;
	id?: number;
	qualidade: ('Muito Satisfeito' | 'Satisfeito' | 'Neutro' | 'Insatisfeito' | 'Muito Insatisfeito')
		| undefined | null;
	cordialidade: number | null;
	apresentacao: number | null;
	temperatura: number | null;
	sabor: number | null;
	higiene: number | null;
	comentario: string | undefined | null;
	timestamp: Date;
};
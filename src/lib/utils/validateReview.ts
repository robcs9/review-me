import type { Review } from "$lib/server/db/types";

export const validateReview = (review: Review) => {
    /* 
    console.log(typeof review ) */
    const QUALITY = ['Muito Satisfeito',
		'Satisfeito',
		'Neutro',
		'Insatisfeito',
		'Muito Insatisfeito',
        ''
	];

    const result = QUALITY.filter(e => e === review.qualidade);
    
    if(result.length < 1) {
        throw new Error('Valor incoerente do atributo qualidade;');
    }
    
    return result;
    /* QUALITY.forEach(e => {
        
    }); */
}
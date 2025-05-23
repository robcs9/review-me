// import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import type { Review } from "$lib/server/db/types";
import { saveReview } from "$lib/server/db";
import { validateReview } from "$lib/utils/validateReview";

export const load = (async ({ parent }) => { 
    // console.log('checking at /playground server')
    // console.log( await parent() )
    // saveReview();

    // validateReview(review);
    
}) satisfies PageServerLoad;

export const actions = {
    default: async ( { request } ) => {
        const data = await request.formData();
        console.log('playground form data: \n', data);
        
        // Fix typing errors
        const review: Review = {
            qualidade: data.get('qualidade'),
            cordialidade: data.get('cordialidade'),
            apresentacao: data.get('apresentacao'),
            temperatura: data.get('temperatura'),
            sabor: data.get('sabor'),
            higiene: data.get('higiene'),
            comentario: data.get('comentario'),
        };
        
        // Validate form fields to match the Review type constraints
        // qualidade = ('NÃO SATISFEITO' | 'NEUTRO' | 'SATISFEITO' | ...)
        // comentario = non-HTML/SQL/script code
        // rest = integer 0~5
        
        // validateReview(review);
        saveReview(review);
        
        return {
            success: true
        }
    },
} satisfies Actions;

// throws error 'invalid export'
/* const validateReview = (review: Review) => {
    const QUALITY = ['Muito Satisfeito',
		'Satisfeito',
		'Neutro',
		'Insatisfeito',
		'Muito Insatisfeito',
        ''
	];

    const result = QUALITY.filter(e => e === review.qualidade);
    
    if(result.length < 1) {
        throw new Error('Erro no valor do atributo: qualidade; Valor incoerente.');
    }
    
    return result;
} */
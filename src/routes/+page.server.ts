// import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from './$types';
import type { Review } from '$lib/server/db/types';
import { saveReview } from '$lib/server/db';
import { validateReview } from '$lib/utils/validateReview';

export const load = (async ({ parent }) => {
	// console.log( await parent() )
	// saveReview();
	// validateReview(review);
}) satisfies PageServerLoad;

export const actions = {
	
	default: async ({ request }) => {
		
		const formData = await request.formData();
		console.log('form data: \n', formData);

		/* const review = {
			qualidade: data.get('qualidade'),
			cordialidade: data.get('cordialidade'),
			apresentacao: data.get('apresentacao'),
			temperatura: data.get('temperatura'),
			sabor: data.get('sabor'),
			higiene: data.get('higiene'),
			comentario: data.get('comentario')
		}; */
		const review = Object.fromEntries(formData)
		const validated = validateReview(review);
		saveReview(validated);
		
		return {
			success: true,
		};

	}
} satisfies Actions;
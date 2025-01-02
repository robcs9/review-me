// import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad, Actions, } from './$types';
import type { Review } from '$lib/server/db/types';
import { saveReview } from '$lib/server/db';
import { validateReview } from '$lib/utils/validateReview';

export const load = (async ({ parent }) => {
	// console.log( await parent() )
}) satisfies PageServerLoad;

export const actions = {
	
	default: async ({ request }) => {
		
		const review: Review = {
			qualidade: null,
			apresentacao: null,
			cordialidade: null,
			higiene: null,
			sabor: null,
			temperatura: null,
			comentario: null,
		};
		
		const formData = await request.formData();

		const reviewData = Object.fromEntries(formData);
		
		for(const k of Object.keys(reviewData)) {
			if(reviewData[k] === '')
				review[k] = null;
			else
				review[k] = reviewData[k];
		}
		// console.log('Debugging review: ', review)
		saveReview(review);
		// const validated = validateReview(reviewData);
		// saveReview(validated);
		
		return {
			success: true,
		};

	}
} satisfies Actions;
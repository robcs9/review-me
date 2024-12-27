import type { Review } from '$lib/server/db/types';

export const validateReview = (review: any) => {
	
	let validated = {};

	for (const [k, v] of Object.entries(review)) {
		if (v === '') {
			validated[k] = undefined;
			continue;
		}
		validated[k] = v;
	}
	
	return validated as Review;

};
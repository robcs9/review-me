// import functions/services to be tested
import { describe, it, expect, test, expectTypeOf } from 'vitest';
import { validateReview } from '$lib/utils/validateReview';
import { Review } from '$lib/server/db/types';

// sample tests
/* const add = (x: number, y: number): number => {
	return x + y;
}

describe('sum test', () => {
	
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
	
	test('Adds 3 + 2 to equal 5', () => {
	
		expect(add(3, 2)).toBe(5)
	
	} )

}); */

// TBD
/* describe('Form Actions with SQLite', () => {
	// expect(submitForm)
}) */

// beforeEach() - implement whenever possible

describe('Validation Tests', () => {
	const defaultReview: Review = {
		comentario: '',
		apresentacao: 0,
		cordialidade: 0,
		higiene: 0,
		qualidade: '',
		sabor: 0,
		temperatura: 0,
	}

	test('Corretude do tipo de valor do atributo Qualidade', () => {
		const review = defaultReview;
		
		// review.qualidade = 0;
		validateReview(review);
		// console.log('review type: ', typeof review)
		// expect(validateReview(review)).toBe(false);
		// console.log(validateReview(review))
	})
		

});
// import functions/services to be tested
import { describe, it, expect, test, expectTypeOf, assertType } from 'vitest';
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

describe('Review Validation Tests', () => {
	const defaultReview: Review = {
		comentario: '',
		apresentacao: 0,
		cordialidade: 0,
		higiene: 0,
		qualidade: '',
		sabor: 0,
		temperatura: 0
	};
	test('Review type', () => {

		/* assertType<Review>({
			qualidade: 0,
			comentario: 0,
			cordialidade: 0,
			sabor: 0,
			higiene: 0,
			apresentacao: 0,
			temperatura: 0,
		}); */
		// Not working properly (?)
		expectTypeOf({
			qualidade: 0,
			comentario: 0,
			cordialidade: 0,
			sabor: 0,
			higiene: 0,
			apresentacao: 0,
			temperatura: 0,
		}).toEqualTypeOf(defaultReview);
	});

	test('Corretude do tipo dos valores dos atributos de Review', () => {
		
		// qualidade
		expect(() => {
			const review = defaultReview;
			review.qualidade = 0;
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo qualidade');

		// comentario
		expect(() => {
			const review = defaultReview;
			review.comentario = 0;
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo comentario');

		// cordialidade
		expect(() => {
			const review = defaultReview;
			review.cordialidade = 'random string';
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo cordialidade');

		// apresentacao
		expect(() => {
			const review = defaultReview;
			review.apresentacao = 'random string';
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo apresentacao');

		// temperatura
		expect(() => {
			const review = defaultReview;
			review.temperatura = 'random string';
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo temperatura');

		// sabor
		expect(() => {
			const review = defaultReview;
			review.sabor = 'random string';
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo sabor');

		// higiene
		expect(() => {
			const review = defaultReview;
			review.higiene = 'random string';;
			validateReview(review);
		}, "Attribute type error should've been thrown").toThrowError('atributo higiene');

		
	});

	// another test
	// (...)
	test("Funcionamento adequado de validateReview", () => {

	});
});

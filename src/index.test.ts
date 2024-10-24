import { describe, it, expect, test } from 'vitest';

// import functions/services to be tested
const add = (x: number, y: number): number => {
	return x + y;
}

describe('sum test', () => {
	
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
	
	test('Adds 3 + 2 to equal 5', () => {
	
		expect(add(3, 2)).toBe(5)
	
	} )

});

describe('Form Actions with SQLite', () => {
	// expect(submitForm)
})
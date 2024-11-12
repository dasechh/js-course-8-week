import { describe, it, expect } from 'vitest';
import { fibonacciMemoized } from '../src/fibonacci';

describe('fibonacciMemoized', () => {
    it('should return the correct value for n = 0', () => {
        const result = fibonacciMemoized(0);
        expect(result).toBe(0);
    });

    it('should return the correct value for n = 1', () => {
        const result = fibonacciMemoized(1);
        expect(result).toBe(1);
    });

    it('should return the correct value for n = 2', () => {
        const result = fibonacciMemoized(2);
        expect(result).toBe(1);
    });

    it('should return the correct value for n = 10', () => {
        const result = fibonacciMemoized(10);
        expect(result).toBe(55);
    });

    it('should handle negative numbers gracefully', () => {
        const result = fibonacciMemoized(-1);
        expect(result).toBeNaN();
    });

    it('should return NaN when input is a string', () => {
        const result = fibonacciMemoized('text' as any);
        expect(result).toBeNaN();
    });

    it('should return NaN when no input is provided', () => {
        const result = fibonacciMemoized();
        expect(result).toBeNaN();
    });
});
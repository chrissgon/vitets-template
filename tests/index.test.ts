import { expect, test } from 'bun:test';
import { sum } from '../src';

test('should return 4 the sum of 2 + 2', () => {
  expect(sum(2, 2)).toBe(4);
});

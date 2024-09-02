import { jest } from '@jest/globals';
import evensAndOdds from './kata';

describe.each([
  { num: 2, expected: '10' },
  { num: 13, expected: 'd' },
  { num: 47, expected: '2f' },
  { num: 0, expected: '0' },
  { num: 12800, expected: '11001000000000' },
  { num: 8172381723, expected: '1e71ca61b' },
])('evensAndOdds func testing', ({ num, expected }) => {
  it(`test case evensAndOdds(${num})`, () => {
    expect(evensAndOdds(num)).toBe(expected);
  });
});

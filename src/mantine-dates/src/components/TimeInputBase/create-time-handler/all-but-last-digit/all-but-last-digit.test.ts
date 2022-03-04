import { allButLastDigit } from './all-but-last-digit';

it('Correctly trims last digit', () => {
  expect(allButLastDigit(0)).toBe(0);
  expect(allButLastDigit(28)).toBe(2);
  expect(allButLastDigit(123)).toBe(12);
});

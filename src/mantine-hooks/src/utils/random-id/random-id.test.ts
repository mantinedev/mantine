import { randomId } from './random-id';

describe('@mantine/hooks/random-id', () => {
  it('returns random id with mantine- prefix', () => {
    expect(randomId().includes('mantine-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});

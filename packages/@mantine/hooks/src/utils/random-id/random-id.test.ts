import { randomId } from './random-id';

describe('@mantine/hooks/random-id', () => {
  it('returns random id with mantine- prefix', () => {
    expect(randomId().includes('mantine-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });

  it('supports custom prefix', () => {
    expect(randomId('my-prefix-').includes('my-prefix-')).toBe(true);
  });
});

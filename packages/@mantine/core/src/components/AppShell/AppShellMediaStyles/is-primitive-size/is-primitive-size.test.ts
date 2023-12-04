import { isPrimitiveSize } from './is-primitive-size';

describe('@mantine/core/AppShell/is-primitive-size', () => {
  it('detects primitive value', () => {
    expect(isPrimitiveSize(1)).toBe(true);
    expect(isPrimitiveSize('xs')).toBe(true);
    expect(isPrimitiveSize('0rem')).toBe(true);
  });

  it('detects responsive primitive value', () => {
    expect(isPrimitiveSize({ base: 1 })).toBe(true);
    expect(isPrimitiveSize({ base: 'xs' })).toBe(true);
    expect(isPrimitiveSize({ base: '0rem' })).toBe(true);
  });

  it('detects non-primitive value', () => {
    expect(isPrimitiveSize({ base: 1, md: 2 })).toBe(false);
    expect(isPrimitiveSize({ base: 'xs', md: 'sm' })).toBe(false);
    expect(isPrimitiveSize({ md: '1rem' })).toBe(false);
  });
});

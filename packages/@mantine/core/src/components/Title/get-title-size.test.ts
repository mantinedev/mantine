import { getTitleSize } from './get-title-size';

describe('@mantine/core/Title/get-title-size', () => {
  it('returns correct font size for h1-h6 based on order/size', () => {
    expect(getTitleSize(1, undefined)).toStrictEqual({
      fontSize: 'var(--mantine-h1-font-size)',
      fontWeight: 'var(--mantine-h1-font-weight)',
      lineHeight: 'var(--mantine-h1-line-height)',
    });

    expect(getTitleSize(2, 'h1')).toStrictEqual({
      fontSize: 'var(--mantine-h1-font-size)',
      fontWeight: 'var(--mantine-h1-font-weight)',
      lineHeight: 'var(--mantine-h1-line-height)',
    });
  });

  it('returns correct font size for size in px', () => {
    expect(getTitleSize(3, 32)).toStrictEqual({
      fontSize: 'calc(2rem * var(--mantine-scale))',
      fontWeight: 'var(--mantine-h3-font-weight)',
      lineHeight: 'var(--mantine-h3-line-height)',
    });
  });
});

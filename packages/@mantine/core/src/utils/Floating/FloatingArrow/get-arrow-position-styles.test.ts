import { getArrowPositionStyles } from './get-arrow-position-styles';

const base = {
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowX: 10,
  arrowY: 10,
  dir: 'ltr' as const,
};

describe('@mantine/core/getArrowPositionStyles', () => {
  it('returns merge styles for an aligned position', () => {
    const styles: Record<string, any> = getArrowPositionStyles({
      ...base,
      position: 'bottom-start',
      arrowPosition: 'merge',
    });

    expect(styles.width).toBe(7);
    expect(styles.clipPath).toBeDefined();
  });

  it('falls back to a regular centered arrow when merge has no aligned placement', () => {
    const styles: Record<string, any> = getArrowPositionStyles({
      ...base,
      position: 'top',
      arrowPosition: 'merge',
    });

    expect(styles.width).toBe(7);
    expect(styles.height).toBe(7);
    expect(styles.transform).toBe('rotate(45deg)');
    expect(styles.clipPath).toBeDefined();
  });
});

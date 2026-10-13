import { getBaseZIndex } from './use-overlay-registry';

describe('@mantine/core/OverlayStack/get-base-z-index', () => {
  it('returns the default modal z-index when there are no entries', () => {
    expect(getBaseZIndex([])).toBe(200);
  });

  it('returns the largest numeric z-index', () => {
    expect(getBaseZIndex([{ zIndex: 100 }, { zIndex: 1000 }, { zIndex: 300 }])).toBe(1000);
  });

  it('converts numeric strings to numbers', () => {
    expect(getBaseZIndex([{ zIndex: '1000' }, { zIndex: 300 }])).toBe(1000);
    expect(getBaseZIndex([{ zIndex: ' 50 ' }])).toBe(200);
    expect(getBaseZIndex([{ zIndex: ' 1500 ' }])).toBe(1500);
  });

  it('keeps non-numeric z-index values in CSS max()', () => {
    expect(getBaseZIndex([{ zIndex: 'var(--z)' }, { zIndex: 500 }, { zIndex: 'var(--z)' }])).toBe(
      'max(500, var(--z))'
    );
  });

  it('ignores empty z-index values', () => {
    expect(getBaseZIndex([{ zIndex: '' }, { zIndex: ' ' }])).toBe(200);
  });
});

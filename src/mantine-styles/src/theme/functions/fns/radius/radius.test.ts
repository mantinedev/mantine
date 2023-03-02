import { radius } from './radius';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/tss/radius', () => {
  it('returns given radius from theme.radius', () => {
    expect(radius(DEFAULT_THEME)('md')).toBe(DEFAULT_THEME.radius.md);
  });

  it('returns given number value', () => {
    expect(radius(DEFAULT_THEME)(32)).toBe('2rem');
  });

  it('returns theme.defaultRadius value is value was not provided', () => {
    expect(radius({ ...DEFAULT_THEME, defaultRadius: 'md' })(null)).toBe(DEFAULT_THEME.radius.md);
    expect(radius({ ...DEFAULT_THEME, defaultRadius: '55%' })(null)).toBe('55%');
    expect(radius({ ...DEFAULT_THEME, defaultRadius: 'md' })(undefined)).toBe(
      DEFAULT_THEME.radius.md
    );
    expect(radius({ ...DEFAULT_THEME, defaultRadius: 114 })(null)).toBe(114);
    expect(radius({ ...DEFAULT_THEME, defaultRadius: 0 })(null)).toBe(0);
  });
});

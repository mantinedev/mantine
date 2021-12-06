import { fontStyles } from './font-styles';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/tss/get-font-styles', () => {
  it('sets font-family from given theme', () => {
    expect(fontStyles(DEFAULT_THEME)().fontFamily).toBe(DEFAULT_THEME.fontFamily);
  });

  it('sets font-family to sans-serif if theme has no font-family', () => {
    expect(fontStyles({ ...DEFAULT_THEME, fontFamily: null })().fontFamily).toBe('sans-serif');
  });
});

import { getFocusStyles } from './get-focus-styles';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/theme/get-focus-styles', () => {
  it('uses primaryColor from given theme', () => {
    expect(
      getFocusStyles({ ...DEFAULT_THEME, primaryColor: 'red' })['&:focus'].boxShadow.includes(
        DEFAULT_THEME.colors.red[5]
      )
    ).toBe(true);
  });

  it('produces :focus and :focus-visible selectors', () => {
    const styles = getFocusStyles({ ...DEFAULT_THEME, primaryColor: 'red' });
    expect(styles['&:focus']).toBeDefined();
    expect(styles['&:focus:not(:focus-visible)']).toBeDefined();
  });
});

import { focusStyles } from './focus-styles';
import { DEFAULT_THEME } from '../../../default-theme';

describe('@mantine/styles/focus-styles', () => {
  it('uses primaryColor from given theme', () => {
    expect(
      (focusStyles({ ...DEFAULT_THEME, primaryColor: 'red' })()['&:focus'] as any).outline.includes(
        DEFAULT_THEME.colors.red[5]
      )
    ).toBe(true);
  });

  it('produces :focus and :focus-visible selectors', () => {
    const styles = focusStyles({ ...DEFAULT_THEME, primaryColor: 'red' })();
    expect(styles['&:focus']).toBeDefined();
    expect(styles['&:focus:not(:focus-visible)']).toBeDefined();
  });

  it('if selector is provided, then it should be used', () => {
    const styles = focusStyles({ ...DEFAULT_THEME, primaryColor: 'red' })('.selector:focus');
    expect(styles['.selector:focus']).toBeDefined();
    expect(styles['.selector:focus:not(:focus-visible)']).toBeDefined();
  });
});

import { DEFAULT_THEME } from '../../../../MantineProvider';
import { FOCUS_CLASS_NAMES, getGlobalClassNames } from './get-global-class-names';

describe('@mantine/core/get-global-class-names', () => {
  it('returns empty string if both focusable and active options are false', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: { focusable: false, active: false },
        unstyled: false,
      })
    ).toBe('');
  });

  it('returns correct class names if focusable is true', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: { focusable: true, active: false },
        unstyled: false,
      })
    ).toBe(FOCUS_CLASS_NAMES[DEFAULT_THEME.focusRing]);
  });

  it('returns correct class names if active is true', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: { focusable: false, active: true },
        unstyled: false,
      })
    ).toBe(DEFAULT_THEME.activeClassName);
  });

  it('returns correct class names if both focusable and active are true', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: { focusable: true, active: true },
        unstyled: false,
      })
    ).toBe(`${FOCUS_CLASS_NAMES[DEFAULT_THEME.focusRing]} ${DEFAULT_THEME.activeClassName}`);
  });

  it('returns empty string if unstyled is true', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: { focusable: true, active: true },
        unstyled: true,
      })
    ).toBe('');
  });

  it('returns empty string if options are undefined', () => {
    expect(
      getGlobalClassNames({
        theme: DEFAULT_THEME,
        options: undefined,
        unstyled: false,
      })
    ).toBe('');
  });
});

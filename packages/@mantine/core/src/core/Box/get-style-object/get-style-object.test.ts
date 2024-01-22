import { DEFAULT_THEME } from '../../MantineProvider';
import { getStyleObject } from './get-style-object';

describe('@mantine/core/Box/get-style-object', () => {
  it('returns empty object if style is undefined', () => {
    expect(getStyleObject(undefined, DEFAULT_THEME)).toStrictEqual({});
  });

  it('returns style object if style is object', () => {
    expect(getStyleObject({ color: 'red' }, DEFAULT_THEME)).toStrictEqual({ color: 'red' });
  });

  it('returns style object if style is function', () => {
    expect(
      getStyleObject((theme) => ({ color: theme.colors.orange[5] }), DEFAULT_THEME)
    ).toStrictEqual({
      color: DEFAULT_THEME.colors.orange[5],
    });
  });

  it('returns style object if style is array', () => {
    expect(
      getStyleObject(
        [{ color: 'red' }, (theme) => ({ color: theme.colors.orange[5] })],
        DEFAULT_THEME
      )
    ).toStrictEqual({ color: DEFAULT_THEME.colors.orange[5] });
  });
});

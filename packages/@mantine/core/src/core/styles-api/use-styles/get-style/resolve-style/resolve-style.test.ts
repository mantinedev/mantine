import { DEFAULT_THEME } from '../../../../MantineProvider';
import { resolveStyle } from './resolve-style';

describe('@mantine/core/resolve-style', () => {
  it('resolves style from object', () => {
    expect(
      resolveStyle({
        theme: DEFAULT_THEME,
        style: { color: 'red' },
      })
    ).toStrictEqual({ color: 'red' });
  });

  it('resolves style from function', () => {
    expect(
      resolveStyle({
        theme: DEFAULT_THEME,
        style: (theme) => ({ color: theme.colors.blue[1] }),
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.blue[1] });
  });

  it('returns empty object if style is not defined', () => {
    expect(resolveStyle({ theme: DEFAULT_THEME, style: undefined })).toStrictEqual({});
  });

  it('returns empty object if style is empty array', () => {
    expect(resolveStyle({ theme: DEFAULT_THEME, style: [] })).toStrictEqual({});
  });

  it('resolves array of object styles', () => {
    expect(
      resolveStyle({
        theme: DEFAULT_THEME,
        style: [{ color: 'red' }, { backgroundColor: 'blue' }],
      })
    ).toStrictEqual({ color: 'red', backgroundColor: 'blue' });
  });

  it('resolves array of function styles', () => {
    expect(
      resolveStyle({
        theme: DEFAULT_THEME,
        style: [(theme) => ({ color: theme.colors.blue[1] }), { backgroundColor: 'blue' }],
      })
    ).toStrictEqual({ color: DEFAULT_THEME.colors.blue[1], backgroundColor: 'blue' });
  });
});

import { mergeThemeOverrides } from './merge-theme-overrides';

describe('@mantine/merge-theme-overrides', () => {
  it('preserves DOM elements in component default props', () => {
    const boundary = document.createElement('div');
    const result = mergeThemeOverrides(
      {
        components: {
          Combobox: { defaultProps: { middlewares: { size: { boundary: 'clippingAncestors' } } } },
        },
      },
      { components: { Combobox: { defaultProps: { middlewares: { size: { boundary } } } } } }
    );

    expect(result.components?.Combobox?.defaultProps.middlewares.size.boundary).toBe(boundary);
  });

  it('merges theme overrides', () => {
    expect(
      mergeThemeOverrides(
        { primaryColor: 'red' },
        { colors: { cyan: ['#fff', '#000'] as any } },
        { defaultRadius: 'md', colors: { red: ['#fff', '#000'] as any }, primaryColor: 'cyan' }
      )
    ).toStrictEqual({
      primaryColor: 'cyan',
      defaultRadius: 'md',
      colors: {
        red: ['#fff', '#000'],
        cyan: ['#fff', '#000'],
      },
    });
  });
});

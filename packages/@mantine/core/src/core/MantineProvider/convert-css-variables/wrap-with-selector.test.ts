import { wrapWithSelector } from './wrap-with-selector';

describe('@mantine/core/wrap-with-selector', () => {
  it('wraps code with selector', () => {
    expect(wrapWithSelector(':root', 'color: red;')).toBe(':root{color: red;}');
  });

  it('wraps code with multiple selectors', () => {
    expect(wrapWithSelector([':root', '@media (max-width: 40em)'], 'color: red;')).toBe(
      '@media (max-width: 40em){:root{color: red;}}'
    );
  });
});

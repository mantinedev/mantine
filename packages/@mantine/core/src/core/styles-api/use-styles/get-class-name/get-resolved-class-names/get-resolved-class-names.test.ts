import { DEFAULT_THEME } from '../../../../MantineProvider';
import { getResolvedClassNames } from './get-resolved-class-names';

const testObjectClassNames = {
  root: 'test-object',
};

const testFunctionClassNames = () => ({
  root: 'test-function',
});

describe('@mantine/core/get-resolved-class-names', () => {
  it('returns className at given selector (object)', () => {
    expect(
      getResolvedClassNames({
        theme: DEFAULT_THEME,
        classNames: testObjectClassNames,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toBe('test-object');
  });

  it('returns className at given selector (function)', () => {
    expect(
      getResolvedClassNames({
        theme: DEFAULT_THEME,
        classNames: testFunctionClassNames,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toBe('test-function');
  });

  it('returns undefined if selector is not in classNames', () => {
    expect(
      getResolvedClassNames({
        theme: DEFAULT_THEME,
        classNames: testObjectClassNames,
        selector: 'test',
        props: {},
        stylesCtx: undefined,
      })
    ).toBeUndefined();
  });

  it('returns undefined if classNames is undefined', () => {
    expect(
      getResolvedClassNames({
        theme: DEFAULT_THEME,
        classNames: undefined,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
      })
    ).toBeUndefined();
  });
});

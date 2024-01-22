import { DEFAULT_THEME } from '../../../../MantineProvider';
import { getOptionsClassNames } from './get-options-class-names';

const testObjectClassNames = {
  root: 'test-object',
};

const testFunctionClassNames = () => ({
  root: 'test-function',
});

describe('@mantine/core/get-options-class-names', () => {
  it('returns className at given selector (object)', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
        options: { classNames: testObjectClassNames },
      })
    ).toBe('test-object');
  });

  it('returns className at given selector (function)', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
        options: { classNames: testFunctionClassNames },
      })
    ).toBe('test-function');
  });

  it('returns undefined if classNames are not defined in options', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
        options: {},
      })
    ).toBe(undefined);
  });

  it('returns undefined if options are not defined', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: {},
        stylesCtx: undefined,
        options: undefined,
      })
    ).toBe(undefined);
  });

  it('resolves classNames with options.props if it is defined', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: { 'data-test': '__test-component-props' },
        stylesCtx: undefined,
        options: {
          classNames: (_, props) => ({ root: props['data-test'] }),
          props: { 'data-test': '__test-options' },
        },
      })
    ).toBe('__test-options');
  });

  it('resolves classNames with props if options.props is not defined', () => {
    expect(
      getOptionsClassNames({
        theme: DEFAULT_THEME,
        selector: 'root',
        props: { 'data-test': '__test-component-props' },
        stylesCtx: undefined,
        options: { classNames: (_, props) => ({ root: props['data-test'] }) },
      })
    ).toBe('__test-component-props');
  });
});

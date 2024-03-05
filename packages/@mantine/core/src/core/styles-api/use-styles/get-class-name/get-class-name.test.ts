import { DEFAULT_THEME, MantineTheme } from '../../../MantineProvider';
import { getClassName, GetClassNameOptions } from './get-class-name';
import { FOCUS_CLASS_NAMES } from './get-global-class-names/get-global-class-names';

const THEME_WITH_CLASSNAMES: MantineTheme = {
  ...DEFAULT_THEME,
  components: {
    TestComponentObject: {
      classNames: {
        root: '__test-object',
      },
    },

    TestComponentFunction: {
      classNames: (_: any, props: Record<string, any>) => ({
        root: `__test-function-${props.test}`,
      }),
    },
  },
};

const defaultOptions: GetClassNameOptions = {
  theme: DEFAULT_THEME,
  stylesCtx: undefined,
  props: {},
  rootSelector: 'root',
  themeName: ['Test'],
  selector: 'root',
  classNamesPrefix: 'mantine',
  classNames: undefined,
  classes: { root: 'test-root', child: 'test-child' },
  unstyled: false,
  className: undefined,
  options: undefined,
  withStaticClasses: true,
};

describe('@mantine/core/get-class-name', () => {
  it('resolves focusable class name', () => {
    expect(
      getClassName({ ...defaultOptions, options: { focusable: true } }).includes(
        FOCUS_CLASS_NAMES[DEFAULT_THEME.focusRing]
      )
    ).toBe(true);

    expect(
      getClassName({ ...defaultOptions, options: { focusable: false } }).includes(
        FOCUS_CLASS_NAMES[DEFAULT_THEME.focusRing]
      )
    ).toBe(false);
  });

  it('resolves active className', () => {
    expect(
      getClassName({ ...defaultOptions, options: { active: true } }).includes(
        DEFAULT_THEME.activeClassName
      )
    ).toBe(true);

    expect(
      getClassName({ ...defaultOptions, options: { active: false } }).includes(
        DEFAULT_THEME.activeClassName
      )
    ).toBe(false);
  });

  it('resolves className prop correctly', () => {
    expect(
      getClassName({ ...defaultOptions, className: '__test-className' }).includes(
        '__test-className'
      )
    ).toBe(true);
  });

  it('resolves options.className correctly', () => {
    expect(
      getClassName({
        ...defaultOptions,
        options: { className: '__test-options-className' },
      }).includes('__test-options-className')
    ).toBe(true);
  });

  it('resolves classNames correctly (object)', () => {
    expect(
      getClassName({ ...defaultOptions, classNames: { root: '__test-root' } }).includes(
        '__test-root'
      )
    ).toBe(true);
  });

  it('resolves classNames correctly (function theme)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        classNames: (theme) => ({ root: theme.activeClassName }),
      }).includes(DEFAULT_THEME.activeClassName)
    ).toBe(true);
  });

  it('resolves classNames correctly (function props)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        props: { 'data-test': '__test-props' },
        classNames: (_, props) => ({ root: props['data-test'] }),
      }).includes('__test-props')
    ).toBe(true);
  });

  it('resolves classNames correctly (function stylesCtx)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        stylesCtx: { 'data-test': '__test-stylesCtx' },
        classNames: (_, __, stylesCtx) => ({ root: stylesCtx!['data-test'] }),
      }).includes('__test-stylesCtx')
    ).toBe(true);
  });

  it('resolves classNames correctly (function theme, props, stylesCtx)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        props: { 'data-test': '__test-props' },
        stylesCtx: { 'data-test': '__test-stylesCtx' },
        classNames: (theme, props, stylesCtx) => ({
          root: `${theme.activeClassName} ${props['data-test']} ${stylesCtx!['data-test']}`,
        }),
      }).includes(`${DEFAULT_THEME.activeClassName} __test-props __test-stylesCtx`)
    ).toBe(true);
  });

  it('resolves options.classNames correctly (object)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        options: { classNames: { root: '__test-root' } },
      }).includes('__test-root')
    ).toBe(true);
  });

  it('resolves options.classNames correctly (function theme)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        options: { classNames: (theme) => ({ root: theme.activeClassName }) },
      }).includes(DEFAULT_THEME.activeClassName)
    ).toBe(true);
  });

  it('resolves options.classNames correctly (function props)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        props: { 'data-test': '__test-props' },
        options: { classNames: (_, props) => ({ root: props['data-test'] }) },
      }).includes('__test-props')
    ).toBe(true);
  });

  it('resolves options.classNames correctly (function options.props)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        options: {
          classNames: (_, props) => ({ root: props['data-test'] }),
          props: { 'data-test': '__test-props' },
        },
      }).includes('__test-props')
    ).toBe(true);
  });

  it('resolves options.classNames correctly (function stylesCtx)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        stylesCtx: { 'data-test': '__test-stylesCtx' },
        options: {
          classNames: (_, __, stylesCtx) => ({ root: (stylesCtx as any)['data-test'] }),
        },
      }).includes('__test-stylesCtx')
    ).toBe(true);
  });

  it('resolves options.classNames correctly (function theme, props, stylesCtx)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        props: { 'data-test': '__test-props' },
        stylesCtx: { 'data-test': '__test-stylesCtx' },
        options: {
          classNames: (theme, props, stylesCtx) => ({
            root: `${theme.activeClassName} ${props['data-test']} ${
              (stylesCtx as any)['data-test']
            }`,
          }),
        },
      }).includes(`${DEFAULT_THEME.activeClassName} __test-props __test-stylesCtx`)
    ).toBe(true);
  });

  it('resolves theme.components classNames correctly (object)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        themeName: ['TestComponentObject'],
        theme: THEME_WITH_CLASSNAMES,
      }).includes('__test-object')
    ).toBe(true);
  });

  it('resolves theme.components classNames correctly (function)', () => {
    expect(
      getClassName({
        ...defaultOptions,
        props: { test: 'test' },
        themeName: ['TestComponentFunction'],
        theme: THEME_WITH_CLASSNAMES,
      }).includes('__test-function-test')
    ).toBe(true);
  });

  it('resolves static selectors correctly', () => {
    const output = getClassName({
      ...defaultOptions,
      themeName: ['Test', 'AnotherTest'],
    });
    expect(output.includes('mantine-Test-root')).toBe(true);
    expect(output.includes('mantine-AnotherTest-root')).toBe(true);
  });

  it('resolves selector class correctly', () => {
    const output = getClassName({
      ...defaultOptions,
      selector: 'test',
      classes: { test: '__test-library' },
    });
    expect(output.includes('__test-library')).toBe(true);
  });

  it('does not add static classes if withStaticClasses is false', () => {
    const output = getClassName({
      ...defaultOptions,
      withStaticClasses: false,
      classes: { root: 'test-root' },
      themeName: ['Test', 'AnotherTest'],
    });

    expect(output.includes('mantine-Test-root')).toBe(false);
    expect(output.includes('mantine-AnotherTest-root')).toBe(false);
    expect(output.includes('test-root')).toBe(true);
  });
});

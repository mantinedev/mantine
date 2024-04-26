import { DEFAULT_THEME, MantineTheme } from '@mantine/core';
import { render } from '../render';

const randomNumber = (min = 10, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const getTestObjectClassNames = (selectors: string[]) =>
  selectors.reduce<Record<string, string>>((acc, selector) => {
    acc[selector] = `test-${selector}`;
    return acc;
  }, {});

const getTestFunctionClassNames = (selectors: string[]) => (theme: MantineTheme, props: any) =>
  selectors.reduce<Record<string, string>>((acc, selector) => {
    acc[selector] = `test-${
      props['data-test'] === undefined ? Math.random() : props['data-test']
    }-${theme === undefined ? Math.random() : theme.defaultRadius}-${selector}`;
    return acc;
  }, {});

interface Options<Props extends Record<string, any> = any, Selectors extends string = string> {
  component: React.ComponentType<Props>;
  props: Props;
  selectors: Selectors[];
  providerName: string;
  providerStylesApi?: boolean;
  compound?: boolean;
}

export function itSupportsStylesApi<
  Props extends Record<string, any>,
  Selectors extends string = string,
>(options: Options<Props, Selectors>, name = 'supports styles api') {
  it(`${name}: classNames (inline object)`, () => {
    const classNames = getTestObjectClassNames(options.selectors);
    const { container } = render(<options.component {...options.props} classNames={classNames} />);

    options.selectors.forEach((selector) => {
      try {
        expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
      } catch (e) {
        throw new Error(`Missing selector: .mantine-${options.providerName}-${selector}`);
      }
    });
  });

  if (!options.compound) {
    it(`${name}: classNames (inline function)`, () => {
      const classNames = getTestFunctionClassNames(options.selectors);
      const { container } = render(
        <options.component {...options.props} data-test="__test" classNames={classNames} />
      );
      options.selectors.forEach((selector) => {
        expect(
          container.querySelector(
            `.${classNames(DEFAULT_THEME, { 'data-test': '__test' })[selector]}`
          )
        ).toBeInTheDocument();
      });
    });
  }

  it(`${name}: styles (inline object)`, () => {
    const classNames = getTestObjectClassNames(options.selectors);
    const styles = options.selectors.reduce<Record<string, React.CSSProperties>>(
      (acc, selector) => {
        acc[selector] = { fontSize: `${randomNumber()}px` };
        return acc;
      },
      {}
    );

    const { container } = render(
      <options.component {...options.props} classNames={classNames} styles={styles} />
    );

    options.selectors.forEach((selector) => {
      expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
        ...styles[selector],
      });
    });
  });

  if (!options.compound) {
    it(`${name}: styles (inline function)`, () => {
      const classNames = getTestObjectClassNames(options.selectors);
      const styles = (theme: MantineTheme, props: any) =>
        options.selectors.reduce<Record<string, React.CSSProperties>>((acc, selector) => {
          acc[selector] = {
            outlineColor: props['data-test'],
            boxShadow: theme.shadows.xl,
          };
          return acc;
        }, {});

      const { container } = render(
        <options.component
          {...options.props}
          data-test="orange"
          classNames={classNames}
          styles={styles}
        />
      );

      options.selectors.forEach((selector) => {
        expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
          ...styles(DEFAULT_THEME, { 'data-test': 'orange' })[selector],
        });
      });
    });
  }

  it(`${name}: static classNames (default)`, () => {
    const { container } = render(<options.component {...options.props} />);
    options.selectors.forEach((selector) => {
      try {
        expect(
          container.querySelector(`.mantine-${options.providerName}-${selector}`)
        ).toBeInTheDocument();
      } catch (e) {
        throw new Error(`Missing selector: .mantine-${options.providerName}-${selector}`);
      }
    });
  });

  if (options.providerStylesApi === undefined || options.providerStylesApi === true) {
    it(`${name}: classNames (MantineProvider object)`, () => {
      const classNames = getTestObjectClassNames(options.selectors);
      const { container } = render(
        <options.component {...options.props} classNames={classNames} />,
        {
          components: {
            [options.providerName]: {
              classNames,
            },
          },
        }
      );

      options.selectors.forEach((selector) => {
        expect(container.querySelector(`.${classNames[selector]}`)).toBeInTheDocument();
      });
    });

    it(`${name}: classNames (MantineProvider function)`, () => {
      const classNames = getTestFunctionClassNames(options.selectors);
      const { container } = render(
        <options.component {...options.props} data-test="__test" classNames={classNames} />,
        {
          components: {
            [options.providerName]: {
              classNames: classNames as any,
            },
          },
        }
      );
      options.selectors.forEach((selector) => {
        expect(
          container.querySelector(
            `.${classNames(DEFAULT_THEME, { 'data-test': '__test' })[selector]}`
          )
        ).toBeInTheDocument();
      });
    });

    it(`${name}: styles (MantineProvider object)`, () => {
      const classNames = getTestObjectClassNames(options.selectors);
      const styles = options.selectors.reduce<Record<string, React.CSSProperties>>(
        (acc, selector) => {
          acc[selector] = { fontSize: `${randomNumber()}px` };
          return acc;
        },
        {}
      );

      const { container } = render(<options.component {...options.props} />, {
        components: {
          [options.providerName]: {
            styles,
            classNames,
          },
        },
      });

      options.selectors.forEach((selector) => {
        expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
          ...styles[selector],
        });
      });
    });

    it(`${name}: styles (MantineProvider function)`, () => {
      const classNames = getTestObjectClassNames(options.selectors);
      const styles = (theme: MantineTheme, props: any) =>
        options.selectors.reduce<Record<string, React.CSSProperties>>((acc, selector) => {
          acc[selector] = {
            outlineColor: props['data-test'],
            boxShadow: theme.shadows.xl,
          };
          return acc;
        }, {});

      const { container } = render(<options.component {...options.props} data-test="orange" />, {
        components: {
          [options.providerName]: {
            styles: styles as any,
            classNames: classNames as any,
          },
        },
      });

      options.selectors.forEach((selector) => {
        try {
          expect(container.querySelector(`.${classNames[selector]}`)).toHaveStyle({
            ...styles(DEFAULT_THEME, { 'data-test': 'orange' })[selector],
          });
        } catch (e) {
          throw new Error(`Missing selector: .test-${options.providerName}-${selector}`);
        }
      });
    });

    it(`${name}: static classNames (MantineProvider)`, () => {
      const { container } = render(
        <options.component {...options.props} />,
        {},
        { classNamesPrefix: 'test' }
      );

      options.selectors.forEach((selector) => {
        try {
          expect(
            container.querySelector(`.test-${options.providerName}-${selector}`)
          ).toBeInTheDocument();
        } catch (e) {
          throw new Error(`Missing selector: .test-${options.providerName}-${selector}`);
        }
      });
    });
  }
}

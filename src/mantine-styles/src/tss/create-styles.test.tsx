import React from 'react';
import { render, screen } from '@testing-library/react';
import { DEFAULT_THEME, MantineProvider } from '../theme';
import { createStyles } from './create-styles';
import { getStylesRef } from './get-styles-ref';
import { CSSObject } from './types';

function expectStyles(Component: React.FC<any>, styles: CSSObject) {
  render(<Component />);
  expect(screen.getByText('test-element')).toHaveStyle(styles);
}

const objectStyles = createStyles({
  testObject: { backgroundColor: '#FEF67F' },
});

const functionStyles = createStyles(() => ({
  testFunction: { borderColor: '#CE5634' },
}));

const themeStyles = createStyles((theme) => ({
  testTheme: { fontSize: theme.fontSizes.xl },
}));

const paramsStyles = createStyles((_theme, params: { radius: number }) => ({
  testParams: { borderRadius: `${params.radius / 16}rem` },
}));

const getRefStyles = createStyles(() => ({
  overrideRef: { ref: getStylesRef('override') },
  testRef: {
    backgroundColor: 'red',

    [`&.${getStylesRef('override')}`]: {
      backgroundColor: 'blue',
    },
  },
}));

function NamedContainer({ classNames, styles }: { classNames?: any; styles?: any }) {
  const { classes } = objectStyles(null, { name: 'NamedComponent', classNames, styles });
  return <div className={classes.testObject}>test-element</div>;
}

function MultipleNames({ classNames, styles }: { classNames?: any; styles?: any }) {
  const { classes } = objectStyles(null, {
    name: ['NamedComponent', 'TestName'],
    classNames,
    styles,
  });
  return <div className={classes.testObject}>test-element</div>;
}

describe('@mantine/styles/create-styles', () => {
  it('assigns styles with css object', () => {
    expectStyles(() => <div className={objectStyles().classes.testObject}>test-element</div>, {
      backgroundColor: '#FEF67F',
    });
  });

  it('assigns styles with function', () => {
    expectStyles(() => <div className={functionStyles().classes.testFunction}>test-element</div>, {
      borderColor: '#CE5634',
    });
  });

  it('supports getting theme as first argument', () => {
    expectStyles(() => <div className={themeStyles().classes.testTheme}>test-element</div>, {
      fontSize: `${DEFAULT_THEME.fontSizes.xl}`,
    });
  });

  it('supports getting params as second argument', () => {
    expectStyles(
      () => <div className={paramsStyles({ radius: 32 }).classes.testParams}>test-element</div>,
      { borderRadius: '2rem' }
    );
  });

  it('allows to merge styles with cx function', () => {
    expectStyles(
      () => {
        const { classes, cx } = objectStyles();
        return (
          <div className={cx(functionStyles().classes.testFunction, classes.testObject)}>
            test-element
          </div>
        );
      },
      { backgroundColor: '#FEF67F', borderColor: '#CE5634' }
    );
  });

  it('allows to override styles with getRef function', () => {
    expectStyles(
      () => {
        const { classes, cx } = getRefStyles();
        return <div className={cx(classes.testRef, classes.overrideRef)}>test-element</div>;
      },
      { backgroundColor: 'blue' }
    );
  });

  it('generates name based on name param', () => {
    render(<NamedContainer />);
    expect(screen.getByText('test-element')).toHaveClass('mantine-NamedComponent-testObject');
  });

  it('assigns given classNames', () => {
    render(<NamedContainer classNames={{ testObject: 'secret-class' }} />);
    expect(screen.getByText('test-element')).toHaveClass('secret-class');
  });

  it('adds given styles with object syntax', () => {
    render(<NamedContainer styles={{ testObject: { outline: '2rem solid red' } }} />);
    expect(screen.getByText('test-element')).toHaveStyle({ outline: '2rem solid red' });
  });

  it('adds given styles with function syntax', () => {
    render(
      <NamedContainer styles={(theme: any) => ({ testObject: { fontSize: theme.fontSizes.xs } })} />
    );
    expect(screen.getByText('test-element')).toHaveStyle({
      fontSize: `${DEFAULT_THEME.fontSizes.xs}`,
    });
  });

  it('assigns classNames from MantineProvider', () => {
    render(
      <MantineProvider
        theme={{
          components: {
            NamedComponent: {
              classNames: { testObject: 'provider-class' },
            },
          },
        }}
      >
        <NamedContainer classNames={{ testObject: 'local-class' }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveClass('provider-class');
    expect(screen.getByText('test-element')).toHaveClass('local-class');
  });

  it('assigns styles from MantineProvider (object)', () => {
    render(
      <MantineProvider
        theme={{
          components: {
            NamedComponent: {
              styles: { testObject: { background: '#EF56ED' } },
            },
          },
        }}
      >
        <NamedContainer styles={{ testObject: { color: 'cyan' } }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveStyle({ background: '#EF56ED', color: 'cyan' });
  });

  it('assigns styles from MantineProvider (function)', () => {
    render(
      <MantineProvider
        theme={{
          components: {
            NamedComponent: {
              styles: (theme) => ({ testObject: { fontSize: theme.fontSizes.sm } }),
            },
          },
        }}
      >
        <NamedContainer styles={{ testObject: { color: 'cyan' } }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveStyle({
      fontSize: `${DEFAULT_THEME.fontSizes.sm}`,
      color: 'cyan',
    });
  });

  it('adds correct static selectors for multiple names', () => {
    render(<MultipleNames />);
    expect(screen.getByText('test-element')).toHaveClass('mantine-NamedComponent-testObject');
    expect(screen.getByText('test-element')).toHaveClass('mantine-TestName-testObject');
  });

  it('supports MantineProvider classNames for multiple names', () => {
    render(
      <MantineProvider
        theme={{
          components: {
            NamedComponent: {
              classNames: { testObject: 'named-class' },
            },

            TestName: {
              classNames: { testObject: 'test-class' },
            },
          },
        }}
      >
        <MultipleNames classNames={{ testObject: 'local-class' }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveClass('named-class');
    expect(screen.getByText('test-element')).toHaveClass('test-class');
    expect(screen.getByText('test-element')).toHaveClass('local-class');
  });

  it('supports MantineProvider styles object for multiple names', () => {
    render(
      <MantineProvider
        theme={{
          components: {
            NamedComponent: {
              styles: { testObject: { background: '#EFFF79' } },
            },

            TestName: {
              styles: { testObject: { color: '#661188' } },
            },
          },
        }}
      >
        <MultipleNames styles={{ testObject: { fontSize: '12%' } }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveStyle({
      background: '#EFFF79',
      color: '#661188',
      fontSize: '12%',
    });
  });
});

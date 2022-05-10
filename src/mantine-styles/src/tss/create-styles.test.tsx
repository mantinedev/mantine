import React from 'react';
import { render, screen } from '@testing-library/react';
import { DEFAULT_THEME, MantineProvider } from '../theme';
import { createStyles } from './create-styles';
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
  testParams: { borderRadius: params.radius },
}));

const getRefStyles = createStyles((_theme, _params, getRef) => ({
  overrideRef: { ref: getRef('override') },
  testRef: {
    backgroundColor: 'red',

    [`&.${getRef('override')}`]: {
      backgroundColor: 'blue',
    },
  },
}));

function NamedContainer({ classNames, styles }: { classNames?: any; styles?: any }) {
  const { classes } = objectStyles(null, { name: 'NamedComponent', classNames, styles });
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
      fontSize: `${DEFAULT_THEME.fontSizes.xl}px`,
    });
  });

  it('supports getting params as second argument', () => {
    expectStyles(
      () => <div className={paramsStyles({ radius: 432 }).classes.testParams}>test-element</div>,
      { borderRadius: '432px' }
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
    render(<NamedContainer styles={{ testObject: { outline: '2px solid red' } }} />);
    expect(screen.getByText('test-element')).toHaveStyle({ outline: '2px solid red' });
  });

  it('adds given styles with function syntax', () => {
    render(
      <NamedContainer styles={(theme: any) => ({ testObject: { fontSize: theme.fontSizes.xs } })} />
    );
    expect(screen.getByText('test-element')).toHaveStyle({
      fontSize: `${DEFAULT_THEME.fontSizes.xs}px`,
    });
  });

  it('assigns classNames from MantineProvider', () => {
    render(
      <MantineProvider
        classNames={{
          NamedComponent: { testObject: 'provider-class' },
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
        styles={{
          NamedComponent: { testObject: { lineHeight: 325 } },
        }}
      >
        <NamedContainer styles={{ testObject: { color: 'cyan' } }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveStyle({ lineHeight: 325, color: 'cyan' });
  });

  it('assigns styles from MantineProvider (function)', () => {
    render(
      <MantineProvider
        styles={{
          NamedComponent: (theme) => ({ testObject: { fontSize: theme.fontSizes.sm } }),
        }}
      >
        <NamedContainer styles={{ testObject: { color: 'cyan' } }} />
      </MantineProvider>
    );

    expect(screen.getByText('test-element')).toHaveStyle({
      fontSize: `${DEFAULT_THEME.fontSizes.sm}px`,
      color: 'cyan',
    });
  });
});

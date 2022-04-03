import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, useMantineDefaultProps } from './theme';
import { createStyles, Global } from './tss';

const useStyles = createStyles((theme) => ({
  element: {
    color: theme.colors[theme.primaryColor][5],
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'black',
    paddingLeft: 100,
  },
}));

function TestElement() {
  const { classes } = useStyles(null, { name: 'TestElement' });
  const { children } = useMantineDefaultProps(
    'TestElement',
    { children: 'Not default' },
    {}
  ) as any;
  return <div className={classes.element}>{children}</div>;
}

storiesOf('@mantine/styles/MantineProvider', module)
  .add('Inheritance: theme', () => (
    <MantineProvider
      inherit
      theme={{ primaryColor: 'orange', colorScheme: 'light' }}
      styles={{ TestElement: { element: { fontSize: 50 } } }}
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      withCSSVariables
    >
      <TestElement />

      <MantineProvider theme={{ primaryColor: 'red' }} inherit>
        <TestElement />
      </MantineProvider>
    </MantineProvider>
  ))
  .add('ClassNames', () => (
    <MantineProvider
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      classNames={{
        TestElement: {
          element: 'test-class',
        },
      }}
    >
      <Global
        styles={{
          '.test-class': {
            border: '1px solid orange',
          },
        }}
      />
      <TestElement />
      <TestElement />
    </MantineProvider>
  ));

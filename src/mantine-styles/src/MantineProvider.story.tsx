import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from './theme';
import { createStyles } from './tss';

const useStyles = createStyles((theme) => ({
  element: {
    color: theme.colors[theme.primaryColor][8],
    fontSize: theme.fontSizes.sm,
  },
}));

function TestElement() {
  const { classes } = useStyles();
  return <div className={classes.element}>Test element</div>;
}

storiesOf('@mantine/styles/MantineProvider', module).add('Inheritance: theme', () => (
  <MantineProvider theme={{ primaryColor: 'orange' }}>
    <TestElement />

    <MantineProvider theme={{ fontSizes: { sm: 20 } }}>
      <TestElement />
    </MantineProvider>
  </MantineProvider>
));

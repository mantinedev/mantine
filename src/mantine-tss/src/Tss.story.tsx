import React, { useState } from 'react';
import cx from 'clsx';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';
import { createStyles } from './create-styles';

interface Params {
  color: 'red' | 'blue';
}

const useStyles = createStyles((theme, { color }: Params, createRef) => {
  const child = {
    ref: createRef(),
    background: 'green',
  } as const;

  return {
    root: {
      color,

      '&:hover': {
        color: theme.primaryColor,
      },

      '@media (max-width: 755px)': {
        backgroundColor: 'red',
      },
    },

    active: {
      [`& .${child.ref}`]: {
        background: 'red',
      },
    },

    child,
  };
});

function Component(props: any) {
  const classes = useStyles({ color: 'blue' });
  const [value, setValue] = useState('');
  return (
    <div className={cx(classes.root, { [classes.active]: props.active })}>
      <div className={classes.child}>Child</div>
      <input
        className={classes.child}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

storiesOf('@mantine/tss', module).add('Usage', () => (
  <>
    <ThemeProvider theme={{ primaryColor: 'orange' }}>
      <Component />
    </ThemeProvider>
    <Component active />
  </>
));

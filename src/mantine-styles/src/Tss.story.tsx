import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from './theme/MantineProvider';
import { createStyles } from './tss/create-styles';

interface Params {
  color: 'red' | 'blue';
}

const useStyles = createStyles((theme, { color }: Params, gerRef) => {
  const child = {
    ref: gerRef('child'),
    background: theme.colors.gray[1],
  } as const;

  return {
    root: {
      color: theme.colors[theme.primaryColor][5],

      '&:hover': {
        color: theme.colors[color][6],
      },

      '@media (max-width: 755px)': {
        backgroundColor: theme.colors.gray[2],
      },
    },

    active: {
      [`& .${child.ref}`]: {
        background: theme.colors.blue[0],
      },
    },

    child,
  };
});

function Component(props: any) {
  const { classes, cx } = useStyles({ color: 'blue' }, { child: 'child' }, 'test');
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
    <MantineProvider theme={{ primaryColor: 'orange' }}>
      <Component />
    </MantineProvider>
    <Component active />
  </>
));

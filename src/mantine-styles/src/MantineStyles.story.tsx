import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles } from './tss/create-styles';

const useRefStyles = createStyles((_, __, getRef) => ({
  parent: {
    [`& .${getRef('child')}`]: {
      color: 'red',
    },
  },

  child: {
    ref: getRef('child'),
    color: 'blue',
  },
}));

function UseRefStyles() {
  const { classes } = useRefStyles();
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.child}>Red child</div>
      </div>
      <div className={classes.child}>Blue child</div>
    </div>
  );
}

storiesOf('@mantine/styles', module).add('Refs', () => <UseRefStyles />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles } from './tss/create-styles';
import { MantineProvider } from './theme';

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

const useConsumerStyles = createStyles((_, { color }: { color: string }) => ({
  element: { color },
}));

function MantineProviderConsumer({ color }: { color: string }) {
  const { classes } = useConsumerStyles({ color }, { name: 'Consumer' });
  return <div className={classes.element}>element</div>;
}

storiesOf('Styles', module)
  .add('Refs', () => <UseRefStyles />)
  .add('MantineProvider styles', () => (
    <MantineProvider
      styles={{
        Consumer: (_, params) => ({
          element: {
            background: params.color === 'red' ? 'black' : 'orange',
          },
        }),
      }}
    >
      <MantineProviderConsumer color="red" />
      <MantineProviderConsumer color="silver" />
    </MantineProvider>
  ));

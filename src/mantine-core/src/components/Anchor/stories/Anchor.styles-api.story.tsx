import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { Anchor } from '../Anchor';

const styles = { color: 'red', margin: 10, backgroundColor: 'blue' };
const useStyles = createStyles(() => ({ root: styles }));

function WithClassNames() {
  return <Anchor classNames={useStyles().classes}>Anchor</Anchor>;
}

storiesOf('@mantine/core/Anchor/styles-api', module)
  .add('With sx', () => <Anchor sx={styles}>Anchor</Anchor>)
  .add('With styles as object', () => <Anchor styles={{ root: styles }}>Anchor</Anchor>)
  .add('With styles as function', () => <Anchor styles={() => ({ root: styles })}>Anchor</Anchor>)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Anchor: () => ({ root: styles }) }}>
      <Anchor>Anchor</Anchor>
    </MantineProvider>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Text } from '@mantine/core';

const styles = { color: 'red', margin: 10, backgroundColor: 'blue' };
const useStyles = createStyles(() => ({ root: styles }));

function WithClassNames() {
  return <Text classNames={useStyles().classes}>Text</Text>;
}

storiesOf('@mantine/core/Text/styles-api', module)
  .add('With sx', () => <Text sx={styles}>Text</Text>)
  .add('With styles as object', () => <Text styles={{ root: styles }}>Text</Text>)
  .add('With styles as function', () => <Text styles={() => ({ root: styles })}>Text</Text>)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Text: () => ({ root: styles }) }}>
      <Text>Text</Text>
    </MantineProvider>
  ));

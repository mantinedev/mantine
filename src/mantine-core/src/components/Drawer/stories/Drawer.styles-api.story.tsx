import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/storybook/src';
import { Drawer as DrawerStylesApi } from '../styles.api';
import { Wrapper } from './_wrapper';

const styles = generateBorderStyles(DrawerStylesApi);
const useStyles = createStyles(() => styles);

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Drawer/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Drawer: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

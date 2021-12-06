import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { Spoiler as SpoilerStylesApi } from '../styles.api';
import { Wrapper } from '../demos/_wrapper';

const styles = generateBorderStyles(SpoilerStylesApi);
const useStyles = createStyles(() => styles);

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Spoiler/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Spoiler: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

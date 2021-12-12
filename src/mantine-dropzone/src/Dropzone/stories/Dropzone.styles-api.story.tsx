import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/ds/src';
import { BaseDemo as Wrapper } from '../demos/_base';
import { Dropzone as DropzoneStylesApi } from '../../styles.api';

const styles = generateBorderStyles(DropzoneStylesApi);
const useStyles = createStyles(() => styles);

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dropzone/Dropzone/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'silver' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Dropzone: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

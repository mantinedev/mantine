import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Dialog, DialogProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Dialog as DialogStylesApi } from '../styles-api';

const styles = generateBorderStyles(DialogStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<DialogProps>) {
  return (
    <Dialog {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" opened withCloseButton>
      Dialog
    </Dialog>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Dialog/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Dialog: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

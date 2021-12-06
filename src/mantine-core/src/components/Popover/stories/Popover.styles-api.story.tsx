import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/ds/src';
import { PopoverProps } from '../Popover';
import { Popover as PopoverStylesApi } from '../styles.api';
import { Wrapper as PopoverWrapper } from './_wrapper';

const styles = generateBorderStyles(PopoverStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<PopoverProps>) {
  return <InputStylesApiWrapper component={PopoverWrapper} opened {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Popover/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Popover: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

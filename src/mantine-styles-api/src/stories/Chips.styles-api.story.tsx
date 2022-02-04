import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Chip, ChipProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Chip as ChipStylesApi } from '../styles-api';

const styles = generateBorderStyles(ChipStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ChipProps>) {
  return (
    <Chip {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" value="1">
      Test chip
    </Chip>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Chips/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Chip: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ))
  .add('Hover styles override', () => (
    <Wrapper styles={{ outline: { '&:hover': { backgroundColor: 'red' } } }} />
  ));

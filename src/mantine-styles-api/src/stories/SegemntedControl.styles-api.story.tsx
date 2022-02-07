import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  createStyles,
  MantineProvider,
  SegmentedControl,
  SegmentedControlProps,
} from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { SegmentedControl as SegmentedControlStylesApi } from '../styles-api';

const styles = generateBorderStyles(SegmentedControlStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<SegmentedControlProps>) {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/SegmentedControl/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ SegmentedControl: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

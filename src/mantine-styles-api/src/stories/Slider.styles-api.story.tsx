import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Slider, SliderProps, RangeSlider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Slider as SliderStylesApi } from '../styles-api';

const styles = generateBorderStyles(SliderStylesApi);
const useStyles = createStyles(() => styles);

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Wrapper(props: Partial<SliderProps>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Slider marks={marks} defaultValue={40} mt={40} {...props} />
      <RangeSlider {...(props as any)} marks={marks} defaultValue={[20, 50]} mt={40} />
    </div>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Slider/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Slider: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/tss';
import { Slider } from './Slider/Slider';
import { RangeSlider } from './RangeSlider/RangeSlider';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(50);
  return <Slider value={value} onChange={setValue} {...props} />;
}
function RangeWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof RangeSlider>, 'value' | 'onChange'>
) {
  const [value, setValue] = useState<[number, number]>([50, 100]);
  return <RangeSlider value={value} onChange={setValue} {...props} />;
}

storiesOf('@mantine/core/Slider', module)
  .add('General usage', () => (
    <div style={{ padding: 100, minHeight: '100vh' }}>
      <Slider defaultValue={60} size="xs" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="sm" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="md" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="lg" styles={{ root: { marginTop: 25 } }} />
      <Slider defaultValue={60} size="xl" styles={{ root: { marginTop: 25 } }} />
      <RangeWrapper defaultValue={[40, 80]} size="xl" styles={{ root: { marginTop: 25 } }} />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ width: 280, padding: 40 }}>
      <Wrapper
        step={25}
        radius={0}
        color="red"
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />

      <RangeWrapper
        styles={{ root: { marginTop: 25 } }}
        step={25}
        minRange={25}
        radius={0}
        color="red"
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </div>
  ))
  .add('Styled', () => (
    <div style={{ width: 280, padding: 40 }}>
      <Slider
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
        labelTransition="fade"
        styles={{
          track: { backgroundColor: DEFAULT_THEME.colors.indigo[1] },
          bar: { backgroundColor: DEFAULT_THEME.colors.indigo[6] },
          label: {
            backgroundColor: DEFAULT_THEME.colors.indigo[6],
            fontSize: 16,
            top: 'unset',
          },
          mark: {
            width: 2,
            borderColor: DEFAULT_THEME.colors.indigo[3],
            borderRadius: 0,
            transform: 'translateX(-2px)',
          },

          markWrapper: {
            display: 'flex',
            flexDirection: 'column-reverse',
            top: 'unset',
            bottom: 0,
          },

          markLabel: {
            fontSize: DEFAULT_THEME.fontSizes.xs,
            marginBottom: 5,
            marginTop: 0,
          },

          thumb: {
            backgroundColor: DEFAULT_THEME.colors.indigo[6],
            borderRadius: 0,
            borderColor: DEFAULT_THEME.colors.indigo[6],
          },
        }}
      />
    </div>
  ));

/* eslint-disable no-console */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Heart } from 'tabler-icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Slider } from './Slider/Slider';
import { RangeSlider } from './RangeSlider/RangeSlider';
import { Button } from '../Button';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Slider>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(50);
  return (
    <>
      <Slider value={value} onChange={setValue} mb={30} {...props} />
      <button type="button" onClick={() => setValue(25)}>
        Set value
      </button>
    </>
  );
}

function RangeWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof RangeSlider>, 'value' | 'onChange'>
) {
  const [value, setValue] = useState<[number, number]>([50, 100]);
  return (
    <>
      <RangeSlider value={value} onChange={setValue} mb={30} {...props} />
      <button type="button" onClick={() => setValue([25, 50])}>
        Set range
      </button>
    </>
  );
}

function Disabled() {
  const [disabled, handlers] = useDisclosure(true);

  return (
    <div style={{ width: 380, padding: 40 }}>
      <Slider
        disabled={disabled}
        defaultValue={50}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />

      <RangeSlider
        mt="xl"
        step={25}
        minRange={25}
        disabled={disabled}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
      <Button onClick={handlers.toggle} mt={30}>
        Toggle
      </Button>
    </div>
  );
}

storiesOf('Slider', module)
  .add('Controlled', () => (
    <div style={{ width: 380, padding: 40 }}>
      <Wrapper
        step={25}
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
  .add('Disabled', () => <Disabled />)
  .add('Near text: user-select', () => (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <Slider mt="xl" />
      <RangeSlider mt="xl" />
      <p>{paragraph}</p>
    </div>
  ))
  .add('onChangeEnd', () => (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <Slider mt="xl" onChangeEnd={console.log} />
      <RangeSlider mt="xl" onChangeEnd={console.log} />
    </div>
  ))
  .add('With thumb children', () => (
    <div style={{ width: 380, padding: 40 }}>
      <Slider
        thumbChildren={<Heart />}
        color="red"
        defaultValue={40}
        styles={{ thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } }}
      />
    </div>
  ))
  .add('Boundaries', () => (
    <div style={{ width: 380, padding: 40 }}>
      <div style={{ backgroundColor: '#b8d2fc', height: 30, marginBottom: 5 }} />

      <div style={{ backgroundColor: '#b8d2fc' }}>
        <Slider
          color="red"
          defaultValue={40}
          marks={[
            { value: 0, label: 'xs' },
            { value: 25, label: 'sm' },
            { value: 50, label: 'md' },
            { value: 75, label: 'lg' },
            { value: 100, label: 'xl' },
          ]}
        />
      </div>
    </div>
  ))
  .add('Negative marks', () => (
    <div style={{ width: 380, padding: 40 }}>
      {/* <Slider
        min={-100}
        max={100}
        marks={[
          { value: -100, label: '-100' },
          { value: -75, label: '-75' },
          { value: -50, label: '-50' },
          { value: -25, label: '-25' },
          { value: 0 },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' },
        ]}
      /> */}

      <RangeSlider
        mt="xl"
        min={-100}
        max={100}
        defaultValue={[-100, 100]}
        marks={[
          { value: -100, label: '-100' },
          { value: -75, label: '-75' },
          { value: -50, label: '-50' },
          { value: -25, label: '-25' },
          { value: 0 },
          { value: 25, label: '25' },
          { value: 50, label: '50' },
          { value: 75, label: '75' },
          { value: 100, label: '100' },
        ]}
      />
    </div>
  ));

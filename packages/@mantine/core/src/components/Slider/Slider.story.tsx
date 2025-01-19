/* eslint-disable no-console */
import { useState } from 'react';
import { RangeSlider } from './RangeSlider/RangeSlider';
import { Slider } from './Slider/Slider';

export default { title: 'Slider' };

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

const sizeMarks = [
  { value: 0, label: '000' },
  { value: 25, label: '000' },
  { value: 50, label: '000' },
  { value: 75, label: '000' },
  { value: 100, label: '000' },
];

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <Slider defaultValue={45} />
      <Slider defaultValue={45} inverted />
      <Slider defaultValue={45} disabled mt="xl" />
      <RangeSlider defaultValue={[45, 80]} />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Slider defaultValue={45} marks={marks} size="md" onChangeEnd={console.log} restrictToMarks />
      {/* <Slider defaultValue={45} disabled mt={60} />
      <Slider defaultValue={45} inverted mt="xl" />
      <Slider defaultValue={45} inverted disabled mt="xl" />
      <Slider defaultValue={45} mt="xl" labelAlwaysOn /> */}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Slider defaultValue={45} marks={marks} unstyled />
      <RangeSlider defaultValue={[45, 55]} marks={marks} unstyled />
    </div>
  );
}

export function SizeSlider() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <div style={{ background: 'pink' }}>
        <Slider step={25} defaultValue={50} marks={sizeMarks} size="md" />
      </div>
    </div>
  );
}

export function Range() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <RangeSlider
        defaultValue={[25, 65]}
        restrictToMarks
        marks={marks}
        size="md"
        onChange={(val) => console.log('change', val)}
        onChangeEnd={(val) => console.log('end', val)}
        disabled
      />
      <RangeSlider defaultValue={[25, 65]} disabled mt={60} />
      <RangeSlider defaultValue={[25, 65]} inverted mt="xl" />
      <RangeSlider defaultValue={[25, 65]} inverted disabled mt="xl" />
      <RangeSlider
        defaultValue={[25, 65]}
        radius={0}
        mt="xl"
        labelAlwaysOn
        color="#fe0d45"
        styles={{
          label: { background: 'pink' },
        }}
      />
    </div>
  );
}

export function DynamicDisabled() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <button type="button" onClick={() => setDisabled((d) => !d)}>
        Toggle disabled
      </button>
      <Slider
        size="md"
        onChange={(val) => console.log('change', val)}
        onChangeEnd={(val) => console.log('end', val)}
        disabled={disabled}
      />
    </div>
  );
}

export function RangeRestrictToMarks() {
  return (
    <div style={{ padding: 40, maxWidth: 1000 }}>
      <RangeSlider
        defaultValue={[10, 25]}
        restrictToMarks
        marks={[
          { value: 5, label: '5%' },
          { value: 10, label: '10%' },
          { value: 15, label: '15%' },
          { value: 20, label: '20%' },
          { value: 25, label: '25%' },
          { value: 30, label: '30%' },
          { value: 70, label: '70%' },
          { value: 75, label: '75%' },
          { value: 80, label: '80%' },
          { value: 85, label: '85%' },
          { value: 90, label: '90%' },
          { value: 95, label: '95%' },
        ]}
        size="lg"
      />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Slider defaultValue={45} mt="xl" marks={marks} size="xs" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="sm" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="md" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="lg" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="xl" />
      <Slider defaultValue={45} mt="xl" marks={marks} size="1rem" />
      <Slider defaultValue={45} mt="xl" marks={marks} size={20} />
      <Slider defaultValue={45} mt="xl" marks={marks} size="2rem" />
    </div>
  );
}

export function WithDecimalValue() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <RangeSlider
        minRange={0.1}
        step={0.1}
        precision={1}
        defaultValue={[0.2, 0.4]}
        min={0}
        max={1}
      />
      <Slider step={0.1} precision={1} defaultValue={0.2} min={0} max={1} />
    </div>
  );
}

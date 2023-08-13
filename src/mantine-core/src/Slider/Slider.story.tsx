import React, { useState } from 'react';
import { Slider, RangeSlider } from './index';

export default { title: 'Slider' };

export function StepIssue() {
  const [value1to9, setValue1to9] = useState(1);
  const [value0to9, setValue0to9] = useState(0);

  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <p>
        Odd number min and 2 per step. Should be 1, 3, 5, 7, 9. The dragging also seem to be lagging
        behind.
      </p>
      Value: {value1to9}
      <Slider
        value={value1to9}
        onChange={(valNew) => setValue1to9(valNew)}
        marks={[
          { value: 1, label: '1' },
          { value: 3, label: '3' },
          { value: 5, label: '5' },
          { value: 7, label: '7' },
          { value: 9, label: '9' },
        ]}
        min={1}
        max={9}
        step={2}
      />
      <p style={{ marginTop: 60 }}>
        Even number min, odd number max and 2 per step. Should not go to 9
      </p>
      Value: {value0to9}
      <Slider
        value={value0to9}
        onChange={(valNew) => setValue0to9(valNew)}
        marks={[
          { value: 0, label: '0' },
          { value: 2, label: '2' },
          { value: 4, label: '4' },
          { value: 6, label: '6' },
          { value: 8, label: '8' },
        ]}
        min={0}
        max={9}
        step={2}
      />
    </div>
  );
}

export function NegativeValues() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <Slider min={-20} max={-10} />
    </div>
  );
}

export function DecimalValues() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <Slider min={1} max={2} step={0.01} precision={2} />
    </div>
  );
}

export function MinRangeWithNegativeValues() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <RangeSlider min={-10} max={10} defaultValue={[-10, 0]} />
    </div>
  );
}

export function MinMaxSliderDistance() {
  return (
    <div style={{ maxWidth: 400, padding: 40 }}>
      <RangeSlider
        min={0}
        max={100}
        minRange={5}
        maxRange={20}
        step={0.5}
        defaultValue={[0, 100]}
      />
    </div>
  );
}

export function KeyboardPrecision() {
  const [value, setValue] = useState<[number, number]>([0.5, 1.5]);
  return (
    <>
      <p>{value}</p>
      <RangeSlider
        mt={100}
        labelAlwaysOn
        minRange={0.01}
        // marks={[
        //   { value: 0, label: '0' },
        //   { value: 1, label: '1' },
        //   { value: 2, label: '2' },
        // ]}
        name="test"
        id="test"
        step={0.01}
        precision={2}
        min={0}
        max={2}
        value={value}
        onChange={setValue}
      />
    </>
  );
}

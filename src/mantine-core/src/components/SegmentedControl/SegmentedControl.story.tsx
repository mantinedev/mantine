import React, { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';
import { MantineThemeProvider } from '../../core';

export default { title: 'SegmentedControl' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} size="lg" fullWidth />
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        size="lg"
        disabled
        mt="md"
        fullWidth
      />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 0 }}>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} unstyled />
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} fullWidth />
    </div>
  );
}

export function Color() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} color="blue" />
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} orientation="vertical" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} disabled />
    </div>
  );
}

export function FocusRingAlways() {
  return (
    <div style={{ padding: 40 }}>
      <MantineThemeProvider theme={{ focusRing: 'always' }} inherit>
        <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
      </MantineThemeProvider>
    </div>
  );
}

export function SelectedItemRemoved() {
  const [value, setValue] = useState('');
  const [breakingThings, setBreakingThings] = useState(false);

  const dataList =
    breakingThings === true ? ['1', '2', '3'].filter((elem) => elem !== '3') : ['1', '2', '3'];

  return (
    <div style={{ padding: 40 }}>
      <SegmentedControl value={value} onChange={setValue} data={dataList} />

      <button type="button" onClick={() => setBreakingThings(!breakingThings)}>
        Click here to break things
      </button>
    </div>
  );
}

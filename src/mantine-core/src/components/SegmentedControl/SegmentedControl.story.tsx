import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Button } from '../Button/Button';
import { SegmentedControl, SegmentedControlProps } from './SegmentedControl';

const stringData = ['React', 'Angular', 'Vue', 'Very long label'];
const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];

function Controlled(props: Partial<SegmentedControlProps>) {
  const [value, onChange] = useState<string>('ng');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

function Scaled() {
  const [isSmall, setIsSmall] = useState(false);
  const [selected, setSelected] = useState(data[0].value);

  return (
    <div style={{ padding: 40 }}>
      <button type="button" onClick={() => setIsSmall(!isSmall)}>
        Transform scale
      </button>
      <div style={{ transform: `scale(${isSmall ? 0.75 : 1})` }}>
        <SegmentedControl
          mt="md"
          data={data}
          value={selected}
          onChange={(value) => setSelected(value)}
        />
      </div>
    </div>
  );
}

function Conditional(props: Partial<SegmentedControlProps>) {
  const [visible, setVisible] = useState<Boolean>(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setVisible(!visible)}>
        {!visible ? 'Show' : 'Hide'} Segmented Control
      </Button>
      <div
        style={{
          paddingTop: 20,
        }}
      >
        {visible && <SegmentedControl {...props} data={stringData} defaultValue="Vue" />}
      </div>
    </div>
  );
}

function DisabledStates() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <SegmentedControl
          disabled
          data={[
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'ng' },
            { label: 'Vue', value: 'vue' },
            { label: 'Very long label', value: 'svelte' },
          ]}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <SegmentedControl
          data={[
            { label: 'React', value: 'react', disabled: true },
            { label: 'Angular', value: 'ng' },
            { label: 'Vue', value: 'vue', disabled: true },
            { label: 'Very long label', value: 'svelte' },
          ]}
        />
      </div>
    </div>
  );
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <div key={size}>
    <Controlled size={size} mt="md" disabled />
  </div>
));

storiesOf('SegmentedControl', module)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('String data', () => (
    <div style={{ padding: 40 }}>
      <SegmentedControl data={stringData} defaultValue="Vue" />
    </div>
  ))
  .add('Scaled', () => <Scaled />)
  .add('Disabled', () => <DisabledStates />)
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ SegmentedControl: { color: 'orange' } }}>
      <Controlled />
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Controlled />
    </MantineProvider>
  ))
  .add('Conditional Rendering without initial transition', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Conditional />
    </MantineProvider>
  ));

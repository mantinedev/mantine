import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider, MANTINE_SIZES } from '../../theme';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Group } from '../Group/Group';
import { NumberInput, NumberInputHandlers } from './NumberInput';

const sizes = MANTINE_SIZES.map((size) => (
  <NumberInput defaultValue={0} label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Wrapper(props: Omit<React.ComponentProps<typeof NumberInput>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onChange={(val) => setValue(val)} {...props} />;
}
function HandlersWrapper() {
  const [value, setValue] = useState(0);
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon size={36} variant="outline" onClick={() => handlers.current.decrement()}>
        –
      </ActionIcon>
      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        max={10}
        min={0}
        step={2}
        styles={{ input: { width: 54, textAlign: 'center' } }}
      />
      <ActionIcon size={36} variant="outline" onClick={() => handlers.current.increment()}>
        +
      </ActionIcon>
    </Group>
  );
}

storiesOf('@mantine/core/NumberInput', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <Wrapper
        max={10}
        step={0.5}
        precision={2}
        min={-10}
        placeholder="Number input"
        noClampOnBlur
      />
      <NumberInput
        max={10}
        step={0.2}
        precision={2}
        min={-10}
        label="Uncontrolled"
        placeholder="Uncontrolled"
        style={{ marginTop: 15 }}
      />
      <Wrapper
        style={{ marginTop: 15 }}
        disabled
        max={10}
        step={0.2}
        precision={2}
        min={-10}
        placeholder="Number input"
      />
      <Wrapper
        style={{ marginTop: 15 }}
        variant="filled"
        max={10}
        step={3}
        min={-10}
        placeholder="Number input"
      />
      <Wrapper
        style={{ marginTop: 15 }}
        variant="unstyled"
        max={10}
        step={1}
        min={-10}
        placeholder="Number input"
      />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40, maxWidth: 400 }}>{sizes}</div>)
  .add('Handlers', () => <HandlersWrapper />)
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <div style={{ maxWidth: 400, padding: 20 }}>
          <Wrapper max={10} step={1} min={-10} placeholder="Number input" />
          <Wrapper
            style={{ marginTop: 15 }}
            variant="filled"
            max={10}
            step={1}
            min={-10}
            placeholder="Number input"
          />
          <Wrapper
            style={{ marginTop: 15 }}
            variant="unstyled"
            max={10}
            step={1}
            min={-10}
            placeholder="Number input"
          />
        </div>
      </div>
    </MantineProvider>
  ));

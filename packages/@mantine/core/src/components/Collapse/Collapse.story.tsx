import { useEffect, useRef, useState } from 'react';
import { Button, NumberInput, Stack } from '../..';
import { Text } from '../Text';
import { Collapse } from './Collapse';

export default { title: 'Collapse' };

function Component() {
  const random = useRef(Math.random());
  useEffect(() => {
    console.log('mounted');
    return () => {
      console.log('unmounted');
    };
  }, []);

  return (
    <Text>
      {random.current}: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </Text>
  );
}

export function Usage() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ maxWidth: 400, background: 'pink' }}>
      <Button onClick={() => setOpened((o) => !o)} mb="md">
        Toggle content
      </Button>

      <Collapse expanded={opened} keepMounted={false}>
        <Component />
      </Collapse>
    </div>
  );
}

export function WithActivityStatePreservation() {
  const [opened, setOpened] = useState(true);
  const [value, setValue] = useState(42);

  return (
    <Stack maw={400} p="md">
      <Text size="sm" c="dimmed">
        <strong>keepMounted + Activity</strong>: the NumberInput value is preserved when the panel
        collapses and re-expands. Compare to the unmounted variant below where state resets.
      </Text>

      <Button onClick={() => setOpened((o) => !o)}>{opened ? 'Collapse' : 'Expand'}</Button>

      <Collapse expanded={opened} keepMounted>
        <Stack gap="xs" p="md" style={{ background: '#f0f4ff', borderRadius: 8 }}>
          <Text fw={600}>keepMounted (Activity)</Text>
          <NumberInput
            label="Value survives collapse"
            value={value}
            onChange={(v) => setValue(typeof v === 'number' ? v : 0)}
          />
        </Stack>
      </Collapse>

      <Text size="xs" c="dimmed">
        Value reported outside panel: <strong>{value}</strong>
      </Text>
    </Stack>
  );
}

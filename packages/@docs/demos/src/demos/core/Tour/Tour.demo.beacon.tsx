import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, TextInput, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group>
        <Button id="beacon-target-1">First target</Button>
        <TextInput id="beacon-target-2" placeholder="Second target" />
        <Button id="beacon-target-3" variant="outline">
          Third target
        </Button>
      </Group>

      <Button mt="md" onClick={() => setActive((current) => !current)}>
        {active ? 'End beacon tour' : 'Start beacon tour'}
      </Button>

      <Tour active={active} mode="beacon" defaultStep={-1} color="teal">
        <Tour.Step target="#beacon-target-1" title="Beacon 1">
          Click the beacon to see this tooltip.
        </Tour.Step>
        <Tour.Step target="#beacon-target-2" title="Beacon 2">
          This is the second beacon tooltip.
        </Tour.Step>
        <Tour.Step target="#beacon-target-3" title="Beacon 3">
          This is the third beacon tooltip.
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group>
        <Button id="beacon-target-1">First target</Button>
        <TextInput id="beacon-target-2" placeholder="Second target" />
        <Button id="beacon-target-3" variant="outline">
          Third target
        </Button>
      </Group>

      <Button mt="md" onClick={() => setActive((current) => !current)}>
        {active ? 'End beacon tour' : 'Start beacon tour'}
      </Button>

      <Tour active={active} mode="beacon" defaultStep={-1} color="teal">
        <Tour.Step target="#beacon-target-1" title="Beacon 1">
          Click the beacon to see this tooltip.
        </Tour.Step>
        <Tour.Step target="#beacon-target-2" title="Beacon 2">
          This is the second beacon tooltip.
        </Tour.Step>
        <Tour.Step target="#beacon-target-3" title="Beacon 3">
          This is the third beacon tooltip.
        </Tour.Step>
      </Tour>
    </>
  );
}

export const beacon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

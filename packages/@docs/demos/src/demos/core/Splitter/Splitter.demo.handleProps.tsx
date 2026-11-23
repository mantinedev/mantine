import { useState } from 'react';
import { Checkbox, Splitter, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Checkbox, Splitter, Stack } from '@mantine/core';

function Demo() {
  const [locked, setLocked] = useState(true);

  return (
    <Stack>
      <Checkbox
        label="Lock first separator"
        checked={locked}
        onChange={(event) => setLocked(event.currentTarget.checked)}
      />
      <Splitter
        h={200}
        getHandleProps={(index) => ({
          disabled: index === 0 && locked,
          withHandle: index === 0 ? !locked : true,
          mod: { locked: index === 0 && locked },
          'aria-label': index === 0 ? 'Resize first pane' : 'Resize second pane',
        })}
      >
        <Splitter.Pane defaultSize={30} min={15} bg="blue" c="white" p="md">
          First pane
        </Splitter.Pane>
        <Splitter.Pane defaultSize={40} min={15} bg="teal" c="white" p="md">
          Second pane
        </Splitter.Pane>
        <Splitter.Pane defaultSize={30} min={15} bg="grape" c="white" p="md">
          Third pane
        </Splitter.Pane>
      </Splitter>
    </Stack>
  );
}
`;

function Demo() {
  const [locked, setLocked] = useState(true);

  return (
    <Stack>
      <Checkbox
        label="Lock first separator"
        checked={locked}
        onChange={(event) => setLocked(event.currentTarget.checked)}
      />
      <Splitter
        h={200}
        getHandleProps={(index) => ({
          disabled: index === 0 && locked,
          withHandle: index === 0 ? !locked : true,
          mod: { locked: index === 0 && locked },
          'aria-label': index === 0 ? 'Resize first pane' : 'Resize second pane',
        })}
      >
        <Splitter.Pane defaultSize={30} min={15} bg="blue" c="white" p="md">
          First pane
        </Splitter.Pane>
        <Splitter.Pane defaultSize={40} min={15} bg="teal" c="white" p="md">
          Second pane
        </Splitter.Pane>
        <Splitter.Pane defaultSize={30} min={15} bg="grape" c="white" p="md">
          Third pane
        </Splitter.Pane>
      </Splitter>
    </Stack>
  );
}

export const handleProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

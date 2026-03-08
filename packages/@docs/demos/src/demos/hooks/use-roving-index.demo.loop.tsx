import { useState } from 'react';
import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Demo() {
  const [loop, setLoop] = useState(true);
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop,
  });

  return (
    <Stack>
      <Checkbox
        label="Loop navigation"
        checked={loop}
        onChange={(event) => setLoop(event.currentTarget.checked)}
      />
      <Group gap="xs">
        {items.map((item, index) => (
          <Button key={item} variant="default" {...getItemProps({ index })}>
            {item}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
`;

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Demo() {
  const [loop, setLoop] = useState(true);
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop,
  });

  return (
    <Stack>
      <Checkbox
        label="Loop navigation"
        checked={loop}
        onChange={(event) => setLoop(event.currentTarget.checked)}
      />
      <Group gap="xs">
        {items.map((item, index) => (
          <Button key={item} variant="default" {...getItemProps({ index })}>
            {item}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}

export const useRovingIndexLoop: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

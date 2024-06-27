import { Badge, Group, keys, MANTINE_TRANSITIONS, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

export function Demo() {
  const transitions = keys(MANTINE_TRANSITIONS).map((transition) => (
    <Tooltip key={transition} label={transition} transitionProps={{ transition, duration: 300 }}>
      <Badge variant="light">{transition}</Badge>
    </Tooltip>
  ));

  return (
    <Group justify="center" style={{ cursor: 'default' }}>
      {transitions}
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'code',
  component: Demo,
};

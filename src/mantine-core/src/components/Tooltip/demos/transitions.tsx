import React from 'react';
import { Tooltip, Button, Group, AVAILABLE_TRANSITIONS } from '../../../index';

export function Demo() {
  const transitions = AVAILABLE_TRANSITIONS.map((transition) => (
    <Tooltip
      key={transition}
      data-mantine-composable
      label={transition}
      transition={transition}
      transitionDuration={300}
    >
      <Button variant="outline">{transition}</Button>
    </Tooltip>
  ));

  return <Group position="center">{transitions}</Group>;
}

export const transitions: MantineDemo = {
  type: 'demo',
  component: Demo,
};

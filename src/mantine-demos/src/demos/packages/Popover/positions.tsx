import React, { useState } from 'react';
import { Popover, Badge, Group } from '@mantine/core';

function Wrapper(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover>,
    'opened' | 'onClose' | 'target' | 'children'
  >
) {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => {}}
      placement={props.placement}
      position={props.position}
      transitionDuration={0}
      width={140}
      styles={{ body: { textAlign: 'center', pointerEvents: 'none' } }}
      spacing="xs"
      noFocusTrap
      noClickOutside
      noEscape
      target={
        <Badge
          color="blue"
          size="lg"
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          {`${props.position}-${props.placement}`}
        </Badge>
      }
      withArrow
      gutter={10}
      className={props.className}
    >
      {`${props.position}-${props.placement}`}
    </Popover>
  );
}

function Demo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => {
    const placements = (['start', 'center', 'end'] as const).map((placement) => (
      <Wrapper key={placement} position={position} placement={placement} />
    ));

    return (
      <Group key={position} position="center" mt={index === 0 ? 0 : 'md'}>
        {placements}
      </Group>
    );
  });

  return <>{tooltips}</>;
}

export const positions: MantineDemo = {
  type: 'demo',
  component: Demo,
};

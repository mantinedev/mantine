import React from 'react';
import { Avatar, Group, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { avatars } from './_mockdata';

const code = `
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="sm">
          <Tooltip label="Salazar Troop" withArrow>
            <Avatar src={avatars[0]} radius="xl" />
          </Tooltip>
          <Tooltip label="Bandit Crimes" withArrow>
            <Avatar src={avatars[1]} radius="xl" />
          </Tooltip>
          <Tooltip label="Jane Rata" withArrow>
            <Avatar src={avatars[2]} radius="xl" />
          </Tooltip>
          <Tooltip
            withArrow
            label={
              <>
                <div>John Outcast</div>
                <div>Levi Capitan</div>
              </>
            }
          >
            <Avatar radius="xl">+2</Avatar>
          </Tooltip>
        </Avatar.Group>
      </Tooltip.Group>
    </Group>
  );
}

export const groupTooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

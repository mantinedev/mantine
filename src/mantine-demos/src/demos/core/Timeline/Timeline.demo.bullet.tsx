import React from 'react';
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons';

const code = `
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons';

function Demo() {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Timeline>
        {/* If you do not pass bullet prop, default bullet will be rendered */}
        <Timeline.Item title="Default bullet" bulletSize={24}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </Timeline.Item>

        {/* You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon */}
        <Timeline.Item
          title="Avatar"
          bulletSize={24}
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as avatar image
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Icon"
          bulletSize={24}
          bullet={<IconSun size={14} />}
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as icon
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="ThemeIcon"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'lime', to: 'cyan' }}
              radius="xl"
            >
              <IconVideo size={14} />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as ThemeIcon component
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Timeline>
        <Timeline.Item title="Default bullet" bulletSize={24}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Avatar"
          bulletSize={24}
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as avatar image
          </Text>
        </Timeline.Item>
        <Timeline.Item title="Icon" bulletSize={24} bullet={<IconSun size={14} />}>
          <Text color="dimmed" size="sm">
            Timeline bullet as icon
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="ThemeIcon"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'lime', to: 'cyan' }}
              radius="xl"
            >
              <IconVideo size={14} />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as ThemeIcon component
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export const bullet: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

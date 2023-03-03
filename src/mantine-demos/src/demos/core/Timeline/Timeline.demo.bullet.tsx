import React from 'react';
import { ThemeIcon, Text, Avatar, Timeline, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconSun, IconVideo } from '@tabler/icons-react';

const code = `
import { ThemeIcon, Text, Avatar, Timeline, Box } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Box maw={320} mx="auto">
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
        <Timeline.Item title="Icon" bulletSize={24} bullet={<IconSun size="0.8rem" />}>
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
              <IconVideo size="0.8rem" />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as ThemeIcon component
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
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
        <Timeline.Item title="Icon" bulletSize={24} bullet={<IconSun size="0.8rem" />}>
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
              <IconVideo size="0.8rem" />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as ThemeIcon component
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}

export const bullet: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

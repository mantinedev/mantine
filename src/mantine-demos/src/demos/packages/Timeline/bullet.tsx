import React from 'react';
import { SunIcon, VideoIcon } from '@modulz/radix-icons';
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';

const code = `
// If you do not pass bullet prop, default bullet will be rendered
<Timeline.Item />

// You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon
<Timeline.Item
  title="Avatar"
  bullet={<Avatar size={22} radius="xl" src="./avatar.png" />}
/>

<Timeline.Item
  title="Icon"
  bullet={<SunIcon style={{ width: 14, height: 14 }} />}
/>

<Timeline.Item
  title="ThemeIcon"
  bullet={(
    <ThemeIcon
      size={22}
      variant="gradient"
      gradient={{ from: 'lime', to: 'cyan' }}
      radius="xl"
    >
      <VideoIcon style={{ width: 14, height: 14 }} />
    </ThemeIcon>
  )}
/>
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
        <Timeline.Item
          title="Icon"
          bulletSize={24}
          bullet={<SunIcon style={{ width: 14, height: 14 }} />}
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
              <VideoIcon style={{ width: 14, height: 14 }} />
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

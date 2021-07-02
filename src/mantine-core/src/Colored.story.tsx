import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  MantineProvider,
  DEFAULT_THEME,
  ActionIcon,
  Alert,
  Avatar,
  Container,
  Group,
  Blockquote,
  Button,
  Checkbox,
  Switch,
  Notification,
  Code,
  RingProgress,
  Slider,
  Tabs,
  Tab,
  ThemeIcon,
  MANTINE_COLORS,
} from './index';

const getColors = (Component: React.FC<any>, props: any) => (
  <Group style={{ marginTop: 20, marginBottom: 20 }}>
    {MANTINE_COLORS.map((color) => (
      <Component color={color} {...props} key={color} />
    ))}
  </Group>
);

function AllColored() {
  return (
    <Container size={1400}>
      {getColors(ActionIcon, { children: '$', variant: 'filled' })}
      {getColors(ThemeIcon, { children: '$', variant: 'filled' })}
      {getColors(Avatar, { children: 'BR' })}
      {getColors(Button, { children: 'Outline', variant: 'outline' })}
      {getColors(Button, { children: 'Filled' })}
      {getColors(Button, { children: 'Light', variant: 'light' })}
      <Slider defaultValue={50} />
      {getColors(Checkbox, { defaultChecked: true })}
      {getColors(Switch, { defaultChecked: true })}
      {getColors(Code, { children: 'React' })}
      <Tabs>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
      <RingProgress sections={[{ value: 60, color: 'blue' }]} />
      <Notification title="Notification" onClose={() => {}}>
        Notification
      </Notification>
      <Blockquote cite="– hello" style={{ marginTop: 20 }}>
        Hello
      </Blockquote>
      <Alert color="blue" title="Alert" style={{ marginTop: 20 }}>
        Alert
      </Alert>
    </Container>
  );
}

storiesOf('@mantine/core/__ALL_COLORED', module)
  .add('Light theme', () => <AllColored />)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <AllColored />
      </MantineProvider>
    </div>
  ));

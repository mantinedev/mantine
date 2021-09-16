import React from 'react';
import { storiesOf } from '@storybook/react';
import { CrumpledPaperIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '../../theme';
import { Group } from '../Group/Group';
import { Avatar } from './Avatar';
import { AvatarsGroup } from './AvatarsGroup/AvatarsGroup';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => <Avatar key={size} size={size} {...props} />);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => <Avatar key={color} color={color} {...props} />);

const image =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

storiesOf('@mantine/core/Avatar', module)
  .add('Sizes', () => <Group>{getSizes({ src: image, radius: 500 })}</Group>)
  .add('Placeholder', () => <Group>{getSizes({ radius: 500 })}</Group>)
  .add('Icon avatar', () => (
    <Group style={{ padding: 15 }}>
      {getThemes({ children: <CrumpledPaperIcon style={{ width: 24, height: 24 }} /> })}
    </Group>
  ))
  .add('Letter avatar', () => (
    <Group style={{ padding: 15 }}>{getThemes({ children: 'VR', radius: 500 })}</Group>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <Group style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: <CrumpledPaperIcon style={{ width: 24, height: 24 }} />,
        })}
      </Group>
      <Group style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: 'VR',
        })}
      </Group>
      <Group style={{ padding: 15 }}>{getSizes({ themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ padding: 15 }}>
        {getSizes({ src: image, themeOverride: { colorScheme: 'dark' } })}
      </Group>
    </div>
  ))
  .add('AvatarsGroup', () => (
    <div style={{ padding: 40 }}>
      <AvatarsGroup size="lg" spacing="md" radius="xl" limit={2}>
        <Avatar color="red" />
        <Avatar radius="xl" color="indigo" />
        <Avatar radius="md" color="blue" />
      </AvatarsGroup>
    </div>
  ));

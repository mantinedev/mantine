import React from 'react';
import { storiesOf } from '@storybook/react';
import { CrumpledPaperIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Avatar } from './Avatar';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => <Avatar key={size} size={size} {...props} />);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => <Avatar key={color} color={color} {...props} />);

const image =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

storiesOf('@mantine/core/Avatar', module)
  .add('Sizes', () => <ElementsGroup>{getSizes({ src: image, radius: 500 })}</ElementsGroup>)
  .add('Placeholder', () => <ElementsGroup>{getSizes({ radius: 500 })}</ElementsGroup>)
  .add('Icon avatar', () => (
    <ElementsGroup style={{ padding: 15 }}>
      {getThemes({ children: <CrumpledPaperIcon style={{ width: 24, height: 24 }} /> })}
    </ElementsGroup>
  ))
  .add('Letter avatar', () => (
    <ElementsGroup style={{ padding: 15 }}>
      {getThemes({ children: 'VR', radius: 500 })}
    </ElementsGroup>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <ElementsGroup style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: <CrumpledPaperIcon style={{ width: 24, height: 24 }} />,
        })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 15 }}>
        {getThemes({
          themeOverride: { colorScheme: 'dark' },
          children: 'VR',
        })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 15 }}>
        {getSizes({ themeOverride: { colorScheme: 'dark' } })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 15 }}>
        {getSizes({ src: image, themeOverride: { colorScheme: 'dark' } })}
      </ElementsGroup>
    </div>
  ));

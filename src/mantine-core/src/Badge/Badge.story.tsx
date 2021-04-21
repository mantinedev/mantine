import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Cross1Icon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Avatar } from '../Avatar/Avatar';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Badge } from './Badge';

const section = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <Cross1Icon style={{ width: 10, height: 10 }} />
  </ActionIcon>
);

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Badge key={color} color={color} {...props}>
      {color}
    </Badge>
  ));

storiesOf('@mantine/core/Badge', module)
  .add('Themes', () => (
    <>
      <ElementsGroup style={{ padding: 10 }}>{getThemes()}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'outline' })}</ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>{getThemes({ variant: 'filled' })}</ElementsGroup>
    </>
  ))
  .add('Sizes', () => (
    <>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ size: 'xs', variant: 'filled' })}
        {getThemes({ size: 'xs', variant: 'outline' })}
        {getThemes({ size: 'xs', variant: 'light' })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ size: 'sm', variant: 'filled' })}
        {getThemes({ size: 'sm', variant: 'outline' })}
        {getThemes({ size: 'sm', variant: 'light' })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ size: 'md', variant: 'filled' })}
        {getThemes({ size: 'md', variant: 'outline' })}
        {getThemes({ size: 'md', variant: 'light' })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ size: 'lg', variant: 'filled' })}
        {getThemes({ size: 'lg', variant: 'outline' })}
        {getThemes({ size: 'lg', variant: 'light' })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ size: 'xl', variant: 'filled' })}
        {getThemes({ size: 'xl', variant: 'outline' })}
        {getThemes({ size: 'xl', variant: 'light' })}
      </ElementsGroup>
    </>
  ))
  .add('Full width', () => (
    <div style={{ width: 300, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Full width badge</Badge>
      <Badge fullWidth variant="filled" style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Full width badge
      </Badge>
    </div>
  ))
  .add('Right and left section', () => (
    <ElementsGroup style={{ padding: 40 }}>
      <Badge style={{ paddingRight: 3 }} rightSection={section}>
        Badge with right section
      </Badge>
      <Badge
        style={{ paddingLeft: 0 }}
        size="lg"
        color="lime"
        leftSection={
          <Avatar
            size={24}
            style={{ marginRight: 5 }}
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        Badge with Avatar
      </Badge>
      <Badge variant="outline" style={{ paddingLeft: 3 }} leftSection={section}>
        Badge with left section
      </Badge>
    </ElementsGroup>
  ))
  .add('Overflow', () => (
    <div style={{ width: 140, padding: 20, background: '#f9f9f9' }}>
      <Badge fullWidth>Badge with overflow</Badge>
      <Badge fullWidth variant="filled" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Badge with overflow
      </Badge>
    </div>
  ))
  .add('Custom component', () => (
    <ElementsGroup style={{ padding: 20 }}>
      <Badge component="a" href="https://mantine.dev" target="_blank">
        Link badge
      </Badge>
      <Badge component="button" type="button">
        Button badge
      </Badge>
      <Badge component={CustomComponent} pads="$$$">
        Custom component
      </Badge>
    </ElementsGroup>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh' }}>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' } })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'outline' })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 10 }}>
        {getThemes({ themeOverride: { colorScheme: 'dark' }, variant: 'filled' })}
      </ElementsGroup>
    </div>
  ));

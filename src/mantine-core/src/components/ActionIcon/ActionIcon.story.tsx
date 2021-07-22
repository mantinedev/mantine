import React from 'react';
import { storiesOf } from '@storybook/react';
import { GearIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '../../theme';
import { Group } from '../Group/Group';
import { ActionIcon } from './ActionIcon';

const getThemes = (props?: any, iconProps?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <GearIcon {...iconProps} />
    </ActionIcon>
  ));

storiesOf('@mantine/core/ActionIcon', module)
  .add('Variants', () => (
    <>
      <Group style={{ padding: 20 }}>{getThemes()}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'transparent' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'filled' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</Group>
    </>
  ))
  .add('Disabled', () => (
    <>
      <Group>{getThemes({ disabled: true })}</Group>
      <Group>{getThemes({ disabled: true, variant: 'filled' })}</Group>
      <Group>{getThemes({ disabled: true, variant: 'transparent' })}</Group>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Group>{getThemes({ size: 'xs' }, { style: { width: 12, height: 12 } })}</Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'sm' }, { style: { width: 14, height: 14 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'md' }, { style: { width: 16, height: 16 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'lg' }, { style: { width: 22, height: 22 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 'xl' }, { style: { width: 28, height: 28 } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ size: 100 }, { style: { width: 80, height: 80 } })}
      </Group>
    </>
  ))
  .add('Autofocus', () => (
    <ActionIcon autoFocus>
      <GearIcon />
    </ActionIcon>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 30 }}>
      <Group>{getThemes({ variant: 'filled', themeOverride: { colorScheme: 'dark' } })}</Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'transparent', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'hover', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'outline', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ variant: 'light', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ disabled: true, variant: 'filled', themeOverride: { colorScheme: 'dark' } })}
      </Group>
      <Group style={{ marginTop: 20 }}>
        {getThemes({ disabled: true, variant: 'outline', themeOverride: { colorScheme: 'dark' } })}
      </Group>
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { GearIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { Group } from '../Group/Group';
import { ActionIcon, ActionIconProps } from './ActionIcon';
import { DarkStory } from '../../../demos';

const VARIANTS = ['default', 'outline', 'filled', 'light', 'hover', 'transparent'] as const;

const getThemes = (props?: any, iconProps?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ActionIcon key={color} color={color} {...props}>
      <GearIcon {...iconProps} />
    </ActionIcon>
  ));

const getVariants = (props?: Partial<ActionIconProps>) =>
  VARIANTS.map((variant) => (
    <ActionIcon key={variant} variant={variant} {...props}>
      <GearIcon />
    </ActionIcon>
  ));

storiesOf('@mantine/core/ActionIcon', module)
  .add('Variants', () => (
    <>
      <Group style={{ padding: 10 }}>{getVariants({ color: 'blue' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ color: 'red' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ disabled: true })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ disabled: true, color: 'blue' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ loading: true, color: 'blue' })}</Group>
    </>
  ))
  .add('Colors', () => (
    <>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'hover' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'filled' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</Group>
    </>
  ))
  .add('Loading', () => (
    <>
      <Group>{getThemes({ loading: true, size: 44 })}</Group>
      <Group>{getThemes({ loading: true, variant: 'filled' })}</Group>
      <Group>{getThemes({ loading: true, variant: 'transparent' })}</Group>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Group>
        {MANTINE_SIZES.map((size) => (
          <ActionIcon key={size} size={size} variant="default">
            <GearIcon />
          </ActionIcon>
        ))}
      </Group>
    </>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <Group style={{ padding: 10 }}>{getVariants({ color: 'blue' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ color: 'red' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ disabled: true })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ disabled: true, color: 'blue' })}</Group>
      <Group style={{ padding: 10 }}>{getVariants({ loading: true, color: 'blue' })}</Group>
    </DarkStory>
  ));

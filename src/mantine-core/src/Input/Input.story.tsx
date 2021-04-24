import React from 'react';
import { storiesOf } from '@storybook/react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/theme';
import Textarea from 'react-textarea-autosize';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Input } from './Input';

const actionIcon = (
  <ActionIcon size="sm">
    <MagnifyingGlassIcon />
  </ActionIcon>
);

const getStates = (props?: any) => (
  <div style={{ maxWidth: 300, padding: 50 }}>
    <Input placeholder="Text" {...props} />
    <Input placeholder="Tel" type="tel" style={{ marginTop: 15 }} {...props} />
    <Input placeholder="Number" type="number" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Search" type="search" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Email" type="email" {...props} style={{ marginTop: 15 }} />
    <Input placeholder="Url" type="url" {...props} style={{ marginTop: 15 }} />
    <Input
      placeholder="Invalid"
      icon={<MagnifyingGlassIcon />}
      invalid
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input placeholder="Disabled" disabled style={{ marginTop: 15 }} {...props} />
    <Input
      placeholder="With icon"
      icon={<MagnifyingGlassIcon />}
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="With right section"
      rightSection={actionIcon}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="Right Section width"
      rightSection={actionIcon}
      rightSectionWidth={50}
      {...props}
    />
  </div>
);

storiesOf('@mantine/core/Input', module)
  .add('Default variant', () => <>{getStates()}</>)
  .add('Filled variant', () => <>{getStates({ variant: 'filled' })}</>)
  .add('Unstyled variant', () => <>{getStates({ variant: 'unstyled' })}</>)
  .add('Custom component: button', () => (
    <>
      {getStates({ component: 'button', children: 'Input button' })}
      {getStates({
        variant: 'filled',
        component: 'button',
        children: 'Input button',
      })}
      {getStates({
        variant: 'unstyled',
        component: 'button',
        children: 'Input button',
      })}
    </>
  ))
  .add('Custom component: Textarea', () => (
    <>
      {getStates({ component: Textarea, inputStyle: { paddingTop: 9, paddingBottom: 9 } })}
      {getStates({
        variant: 'filled',
        component: Textarea,
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'unstyled',
        component: Textarea,
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
    </>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getStates({
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'filled',
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
      {getStates({
        variant: 'unstyled',
        themeOverride: { colorScheme: 'dark' },
        inputStyle: { paddingTop: 9, paddingBottom: 9 },
      })}
    </div>
  ));

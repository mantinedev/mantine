import React from 'react';
import { useBooleanToggle } from '@mantine/hooks';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import Textarea from 'react-textarea-autosize';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Input } from './Input';

function ValidInvalid() {
  const [valid, toggle] = useBooleanToggle();
  return (
    <div style={{ padding: 40 }}>
      <Input invalid={valid} placeholder="Hello there" />
      <Input style={{ marginTop: 10 }} variant="filled" invalid={valid} placeholder="Hello there" />

      <button type="button" onClick={() => toggle()} style={{ marginTop: 20 }}>
        toggle
      </button>
    </div>
  );
}

const actionIcon = (
  <ActionIcon size="sm">
    <MagnifyingGlassIcon />
  </ActionIcon>
);

const sizes = MANTINE_SIZES.map((size) => (
  <Input placeholder={`${size} input`} key={size} style={{ marginTop: 15 }} size={size} />
));

const getStates = (props?: any) => (
  <div style={{ maxWidth: 400, padding: 50 }}>
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

storiesOf('@mantine/core/Input/stories', module)
  .add('Sizes', () => <div style={{ maxWidth: 400, padding: 50 }}>{sizes}</div>)
  .add('Default variant', () => <>{getStates({ variant: 'default' })}</>)
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
  .add('Invalid toggle', () => <ValidInvalid />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { MantineSize, DEFAULT_THEME } from '@mantine/styles';
import { Group } from '../Group/Group';
import { Button, ButtonProps, UnstyledButton } from './index';

const getThemes = (props?: Partial<ButtonProps<'button'>>) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button key={color} color={color} {...props}>
      {color}
    </Button>
  ));

const getLinkThemes = (props?: Partial<ButtonProps<'a'>>) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button
      component="a"
      href="https://mantine.dev"
      target="_blank"
      key={color}
      color={color}
      {...props}
    >
      link - {color}
    </Button>
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size}>
    Button {size}
  </Button>
));

const compact = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size} compact>
    Button {size}
  </Button>
));

const loading = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size} loading>
    Button {size}
  </Button>
));

storiesOf('@mantine/core/Button/stories', module)
  .add('UnstyledButton', () => (
    <div style={{ padding: 20 }}>
      <UnstyledButton>unstyled</UnstyledButton>
    </div>
  ))
  .add('Themes', () => (
    <>
      <Group style={{ padding: 20 }}>{getThemes()}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'default' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</Group>
      <div style={{ backgroundColor: 'silver' }}>
        <Group style={{ padding: 20 }}>{getThemes({ variant: 'white' })}</Group>
      </div>
    </>
  ))
  .add('As link', () => (
    <>
      <Group style={{ padding: 20 }}>{getLinkThemes()}</Group>
      <Group style={{ padding: 20 }}>{getLinkThemes({ variant: 'outline' })}</Group>
      <Group style={{ padding: 20 }}>{getLinkThemes({ variant: 'default' })}</Group>
    </>
  ))
  .add('Sizes', () => <Group style={{ padding: 20 }}>{sizes}</Group>)
  .add('Compact', () => <Group style={{ padding: 20 }}>{compact}</Group>)
  .add('Icons', () => (
    <>
      <Group style={{ padding: 20 }}>
        {getThemes({ leftIcon: <CalendarIcon style={{ width: 14 }} /> })}
      </Group>
      <Group style={{ padding: 20 }}>
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon style={{ width: 14 }} />,
          variant: 'outline',
        })}
      </Group>

      <Group style={{ padding: 20 }}>
        {getThemes({
          variant: 'default',
          leftIcon: <CalendarIcon style={{ width: 14 }} />,
          rightIcon: <ExternalLinkIcon style={{ width: 14 }} />,
        })}
      </Group>
    </>
  ))
  .add('Disabled', () => (
    <>
      <Group style={{ padding: 20 }}>{getThemes({ disabled: true })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline', disabled: true })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light', disabled: true })}</Group>
    </>
  ))
  .add('Loading', () => (
    <div style={{ padding: 40 }}>
      <Group>{loading}</Group>
    </div>
  ));

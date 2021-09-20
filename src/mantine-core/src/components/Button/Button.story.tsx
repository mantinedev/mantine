import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { MantineSize, DEFAULT_THEME } from '@mantine/tss';
import { Group } from '../Group/Group';
import { Button, UnstyledButton } from './Button';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button key={color} color={color} {...props}>
      {color}
    </Button>
  ));

const getLinkThemes = (props?: any) =>
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

storiesOf('@mantine/core/Button', module)
  .add('UnstyledButton', () => (
    <div style={{ padding: 20 }}>
      <UnstyledButton>unstyled</UnstyledButton>
    </div>
  ))
  .add('Gradient', () => (
    <Group>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        Indigo cyan
      </Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 90 }}>
        Lime green
      </Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'cyan', deg: 180 }}>
        Teal cyan
      </Button>
    </Group>
  ))
  .add('Themes', () => (
    <>
      <Group style={{ padding: 20 }}>{getThemes()}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'default' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</Group>
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'link' })}</Group>
      <div style={{ backgroundColor: 'silver' }}>
        <Group style={{ padding: 20 }}>{getThemes({ variant: 'white' })}</Group>
      </div>
    </>
  ))
  .add('Link button themes', () => (
    <>
      <Group style={{ padding: 20 }}>{getLinkThemes()}</Group>
      <Group style={{ padding: 20 }}>{getLinkThemes({ variant: 'outline' })}</Group>
      <Group style={{ padding: 20 }}>{getLinkThemes({ variant: 'link' })}</Group>
    </>
  ))
  .add('Sizes', () => <Group style={{ padding: 20 }}>{sizes}</Group>)
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
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon style={{ width: 12 }} />,
          variant: 'link',
        })}
      </Group>

      <Group style={{ padding: 20 }}>
        {getThemes({
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
      <Group style={{ padding: 20 }}>{getThemes({ variant: 'link', disabled: true })}</Group>
    </>
  ))
  .add('Full width', () => (
    <div style={{ padding: 20 }}>
      <Button fullWidth>Full width button</Button>
      <Button component="a" fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </Button>
      <Button variant="link" fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ))
  .add('Overflow', () => (
    <div style={{ width: 120, padding: 20, backgroundColor: '#f3f3f3' }}>
      <Button fullWidth>Full width button</Button>
      <Button component="a" fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </Button>
      <Button variant="link" fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ))
  .add('Loading', () => (
    <div style={{ padding: 40 }}>
      <Button loading>Loading</Button>
    </div>
  ))
  .add('React router', () => (
    <MemoryRouter>
      <Group style={{ padding: 20 }}>
        <Button<typeof Link, HTMLAnchorElement> component={Link} to="/hello">
          Mantine button
        </Button>
      </Group>
    </MemoryRouter>
  ));

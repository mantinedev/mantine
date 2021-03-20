import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { MantineSize, DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Button, LinkButton } from './Button';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button key={color} color={color} {...props}>
      {color}
    </Button>
  ));

const getLinkThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <LinkButton href="https://mantine.dev" target="_blank" key={color} color={color} {...props}>
      link - {color}
    </LinkButton>
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size}>
    Button {size}
  </Button>
));

storiesOf('@mantine/core/Button', module)
  .add('Themes', () => (
    <>
      <ElementsGroup style={{ padding: 20 }}>{getThemes()}</ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>{getThemes({ variant: 'outline' })}</ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>{getThemes({ variant: 'link' })}</ElementsGroup>
    </>
  ))
  .add('LinkButton themes', () => (
    <>
      <ElementsGroup style={{ padding: 20 }}>{getLinkThemes()}</ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>{getLinkThemes({ variant: 'outline' })}</ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>{getLinkThemes({ variant: 'link' })}</ElementsGroup>
    </>
  ))
  .add('Sizes', () => <ElementsGroup style={{ padding: 20 }}>{sizes}</ElementsGroup>)
  .add('Icons', () => (
    <>
      <ElementsGroup style={{ padding: 20 }}>
        {getThemes({ leftIcon: <CalendarIcon style={{ width: 14 }} /> })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon style={{ width: 14 }} />,
          variant: 'outline',
        })}
      </ElementsGroup>

      <ElementsGroup style={{ padding: 20 }}>
        {getLinkThemes({
          rightIcon: <ExternalLinkIcon style={{ width: 12 }} />,
          variant: 'link',
        })}
      </ElementsGroup>

      <ElementsGroup style={{ padding: 20 }}>
        {getThemes({
          leftIcon: <CalendarIcon style={{ width: 14 }} />,
          rightIcon: <ExternalLinkIcon style={{ width: 14 }} />,
        })}
      </ElementsGroup>
    </>
  ))
  .add('Disabled', () => (
    <>
      <ElementsGroup style={{ padding: 20 }}>{getThemes({ disabled: true })}</ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>
        {getThemes({ variant: 'outline', disabled: true })}
      </ElementsGroup>
      <ElementsGroup style={{ padding: 20 }}>
        {getThemes({ variant: 'link', disabled: true })}
      </ElementsGroup>
    </>
  ))
  .add('Full width', () => (
    <div style={{ padding: 20 }}>
      <Button fullWidth>Full width button</Button>
      <LinkButton fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </LinkButton>
      <Button variant="link" fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ))
  .add('Overflow', () => (
    <div style={{ width: 120, padding: 20, backgroundColor: '#f3f3f3' }}>
      <Button fullWidth>Full width button</Button>
      <LinkButton fullWidth style={{ marginTop: 20 }}>
        Full width link button
      </LinkButton>
      <Button variant="link" fullWidth style={{ marginTop: 20 }}>
        Full width link variant
      </Button>
    </div>
  ));

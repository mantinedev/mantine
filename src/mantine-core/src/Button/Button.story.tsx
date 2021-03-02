import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExternalLinkIcon, CalendarIcon } from '@modulz/radix-icons';
import { Calendar } from 'react-feather';
import { MantineSize, DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Button, LinkButton } from './Button';

const colors = Object.keys(DEFAULT_THEME.colors);

const filled = colors.map((theme) => (
  <Button color={theme} key={theme}>
    {theme} md
  </Button>
));

const outline = colors.map((theme) => (
  <Button color={theme} key={theme} variant="outline">
    {theme} md
  </Button>
));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as MantineSize[]).map((size) => (
  <Button color="blue" key={size} size={size}>
    Button {size}
  </Button>
));

storiesOf('@mantine/core', module).add('Button', () => (
  <>
    <ElementsGroup>
      <Button disabled>Disabled</Button>
      <Button radius="lg">Lg radius</Button>
      <Button size="xs" color="blue" radius="xl">
        xs with xl radius
      </Button>
      <Button color="blue" radius="xl" size="xl">
        XL With xl radius
      </Button>
      <Button color="blue" variant="link">
        Link variant
      </Button>
      <Button color="gray" variant="link">
        Link variant
      </Button>
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>
      <Button>Primary color (default)</Button>
      {filled}
      {outline}
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>{sizes}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>
      <Button color="blue" leftIcon={<Calendar size={16} />}>
        Book meeting
      </Button>

      <Button size="xl" color="blue" leftIcon={<CalendarIcon style={{ height: 22, width: 22 }} />}>
        Book meeting
      </Button>

      <Button disabled size="xl" color="blue" leftIcon={<CalendarIcon style={{ width: 18 }} />}>
        Book meeting
      </Button>

      <LinkButton
        rightIcon={<ExternalLinkIcon style={{ width: 15 }} />}
        href="https://mantine.dev"
        target="_blank"
      >
        Open in new tab
      </LinkButton>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
      <Button variant="link" disabled>
        Link Disabled
      </Button>
    </ElementsGroup>
    <div style={{ width: 500, padding: 10, backgroundColor: '#eee' }}>
      <Button fullWidth>Full width</Button>
      <Button style={{ marginTop: 15 }} fullWidth variant="outline">
        Full width outline
      </Button>
      <Button style={{ marginTop: 15 }} fullWidth variant="link">
        Full width link
      </Button>
    </div>
  </>
));

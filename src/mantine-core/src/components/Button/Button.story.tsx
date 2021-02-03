import React from 'react';
import { storiesOf } from '@storybook/react';
import { OPEN_COLOR_THEMES, Size } from '@mantine/types';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Button from './Button';

const md = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="md">
    {theme} md
  </Button>
));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as Size[]).map((size) => (
  <Button color="teal" key={size} size={size}>
    Button {size}
  </Button>
));

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <>
    <ElementsGroup>
      <Button style={{ marginTop: 10 }} disabled>
        Disabled
      </Button>
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>
      <Button>White (default)</Button>
      {md}
    </ElementsGroup>

    <ElementsGroup style={{ marginTop: 10 }}>{sizes}</ElementsGroup>
  </>
));

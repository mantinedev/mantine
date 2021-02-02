import React from 'react';
import { storiesOf } from '@storybook/react';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Button from './Button';

const xs = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="xs">
    {theme} xs
  </Button>
));

const sm = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="sm">
    {theme} sm
  </Button>
));

const md = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="md">
    {theme} md
  </Button>
));

const lg = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="lg">
    {theme} lg
  </Button>
));

const xl = OPEN_COLOR_THEMES.map((theme) => (
  <Button color={theme} key={theme} size="xl">
    {theme} xl
  </Button>
));

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <>
    <Button theme="white">White (default)</Button>
    <ElementsGroup style={{ marginTop: 10 }}>{xs}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{sm}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{md}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{lg}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{xl}</ElementsGroup>
    <Button style={{ marginTop: 10 }} disabled>
      Disabled
    </Button>
  </>
));

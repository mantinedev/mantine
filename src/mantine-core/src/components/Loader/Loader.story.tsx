import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Loader, LoaderProps } from './Loader';
import { DarkStory } from '../../../demos';

const getThemes = (props?: LoaderProps) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Loader key={color} color={color} style={{ display: 'block', marginTop: 15 }} {...props} />
  ));

const sizes = ([10, 'xs', 'sm', 'md', 'lg', 'xl', 100] as const).map((size) => (
  <Loader key={size} size={size} style={{ display: 'block', marginTop: 15 }} />
));

storiesOf('@mantine/core/Loader', module)
  .add('Oval', () => <div style={{ padding: 15 }}>{getThemes({ variant: 'oval' })}</div>)
  .add('Dots', () => <div style={{ padding: 15 }}>{getThemes({ variant: 'dots' })}</div>)
  .add('Bars', () => <div style={{ padding: 15 }}>{getThemes({ variant: 'bars' })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 15 }}>{getThemes()}</div>
    </DarkStory>
  ));

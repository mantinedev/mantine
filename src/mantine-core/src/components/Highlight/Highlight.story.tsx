import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Highlight } from './Highlight';
import { DarkStory } from '../../../demos';

const themes = Object.keys(DEFAULT_THEME.colors).map((color) => (
  <Highlight key={color} highlightColor={color} highlight="light">
    Highlight this
  </Highlight>
));

storiesOf('@mantine/core/Highlight', module)
  .add('General usage', () => (
    <>
      <Highlight highlight="that">Nothing nothing</Highlight>
      <Highlight highlight="Highlight all">Highlight all</Highlight>
      <Highlight highlight={['Highlight', 'array']}>Highlight array</Highlight>
      <Highlight highlight="multiple">
        Multiple strings will be highlighted with multiple enabled
      </Highlight>
      <Highlight highlight={['hello', 'world']}>
        Even arrays like hello world will be highlighted multiple, hello world!
      </Highlight>
    </>
  ))
  .add('Regex symbols', () => (
    <>
      <Highlight highlight="(this">Highlight (this)</Highlight>
      <Highlight highlight="this'">Highlight this&apos;</Highlight>
      <Highlight highlight="this[">Highlight this[</Highlight>
      <Highlight highlight="[this]">Highlight [this]</Highlight>
    </>
  ))
  .add('Themes', () => <>{themes}</>)
  .add('Custom component', () => (
    <Highlight
      highlight="this"
      transform="uppercase"
      size="sm"
      weight="bold"
      component="a"
      variant="link"
      target="_blank"
      href="https://mantine.dev"
    >
      Highlight this
    </Highlight>
  ))
  .add('Dark theme', () => <DarkStory>{themes}</DarkStory>);

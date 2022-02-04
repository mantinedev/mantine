import React from 'react';
import { storiesOf } from '@storybook/react';
import { Highlight } from './Highlight';

storiesOf('@mantine/core/Highlight/stories', module)
  .add('Highlight parts', () => (
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
  .add('Custom highlight styles', () => (
    <Highlight
      highlight="multiple"
      highlightStyles={(theme) => ({
        backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      })}
    >
      Multiple strings will be highlighted with multiple enabled
    </Highlight>
  ))
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
  ));

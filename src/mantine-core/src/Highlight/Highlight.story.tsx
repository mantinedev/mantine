import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Highlight } from './Highlight';

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
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Highlight highlightColor="teal" highlight="light" themeOverride={{ colorScheme: 'dark' }}>
        Highlight this
      </Highlight>
      <Highlight highlight="that" themeOverride={{ colorScheme: 'dark' }}>
        Nothing nothing
      </Highlight>
      <Highlight highlight="Highlight all" themeOverride={{ colorScheme: 'dark' }}>
        Highlight all
      </Highlight>
    </div>
  ));

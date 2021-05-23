import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { upperFirst, useWindowEvent } from '@mantine/hooks';
import { MantineProvider, Container, ActionIcon, Title, DEFAULT_THEME } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

import * as demos from '@mantine/core/src/demos';
import Demo from '../../docs/src/components/Demo/Demo';

const decorator = (Story: React.FC, props: any) => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyJ' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));
    }
  });

  return (
    <MantineProvider theme={{ colorScheme }}>
      <ActionIcon
        aria-label="Toggle theme"
        variant="outline"
        color={colorScheme === 'dark' ? 'yellow' : 'blue'}
        onClick={() => setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        style={{ position: 'absolute', top: 15, right: 15 }}
      >
        {colorScheme === 'dark' ? (
          <SunIcon style={{ width: 18, height: 18 }} />
        ) : (
          <MoonIcon style={{ width: 18, height: 18 }} />
        )}
      </ActionIcon>

      <div
        style={{
          minHeight: '100vh',
          backgroundColor:
            colorScheme === 'light' ? DEFAULT_THEME.white : DEFAULT_THEME.colors.dark[7],
        }}
      >
        <Container size="sm" style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Story {...props} />
        </Container>
      </div>
    </MantineProvider>
  );
};

const stories = storiesOf('Documentation demo', module);
stories.addDecorator(decorator);

Object.keys(demos).forEach((key) => {
  stories.add(key.replace('Demos', ''), () => {
    const docs = Object.keys(demos[key]).map((story) => (
      <div key={story}>
        <Title order={2}>{upperFirst(story)}</Title>
        <Demo data={demos[key][story]} />
      </div>
    ));
    return <div>{docs}</div>;
  });
});

import React, { useState } from 'react';
import { MantineProvider, Container, ActionIcon, DEFAULT_THEME } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useWindowEvent } from '@mantine/hooks';

export const parameters = { layout: 'fullscreen' };

export const decorators = [
  (Story: React.FC) => {
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
            <Story />
          </Container>
        </div>
      </MantineProvider>
    );
  },
];

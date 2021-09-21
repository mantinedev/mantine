import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/styles';
import { Accordion } from './Accordion';

const base = (
  <Accordion>
    <Accordion.Item label="Customization">
      Colors, fonts, shadows and many other parts are customizable to fit your design needs
    </Accordion.Item>

    <Accordion.Item label="Flexibility">
      Configure components appearance and behavior with vast amount of settings or overwrite any
      part of component styles
    </Accordion.Item>

    <Accordion.Item label="No annoying focus ring">
      With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
    </Accordion.Item>
  </Accordion>
);

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => <div style={{ padding: 40, maxWidth: 540 }}>{base}</div>)
  .add('Dark theme', () => (
    <div style={{ height: '100vh', backgroundColor: DEFAULT_THEME.colors.dark[7] }}>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <div style={{ padding: 40, maxWidth: 540 }}>{base}</div>
      </MantineProvider>
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '../../theme';
import { Treeview } from './Treeview';

storiesOf('@mantine/core/Treeview', module)
  .add('General usage', () => (
    <div style={{ padding: 20 }}>
      <Treeview
        selected="/"
        labelNode="Treeview"
        value="/"
        items={[
          {
            value: '/',
            items: [],
            labelNode: 'Root',
          },
        ]}
        type="folder"
      />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <Treeview
          selected="/"
          labelNode="Treeview"
          value="/"
          items={[
            {
              value: '/',
              items: [],
              labelNode: 'Root',
            },
          ]}
          type="folder"
        />
      </div>
    </MantineProvider>
  ));

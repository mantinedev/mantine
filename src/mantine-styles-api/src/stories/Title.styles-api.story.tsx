import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, Title } from '@mantine/core';

storiesOf('@mantine/core/Title/styles-api', module)
  .add('With sx', () => <Title sx={{ border: '1px solid red' }}>title</Title>)
  .add('Styles API on MantineProvider', () => (
    <div style={{ padding: 20 }}>
      <MantineProvider
        styles={{
          Title: (theme) => ({
            root: {
              color: theme.colorScheme === 'dark' ? 'blue' : 'red',
            },
          }),
        }}
      >
        <Title order={1}>MantineProvider styles</Title>
      </MantineProvider>
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Breadcrumbs } from './Breadcrumbs';

storiesOf('Breadcrumbs', module).add('Default props on MantineProvider', () => (
  <MantineProvider defaultProps={{ Breadcrumbs: { separator: 'test' } }}>
    <Breadcrumbs>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </Breadcrumbs>
  </MantineProvider>
));

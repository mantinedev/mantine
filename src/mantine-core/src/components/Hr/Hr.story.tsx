import React from 'react';
import { storiesOf } from '@storybook/react';
import MantineProvider from '../../MantineProvider/MantineProvider';
import Hr from './Hr';

storiesOf('@mantine/core', module).add('Hr', () => (
  <MantineProvider>
    <Hr />
    <Hr variant="dotted" style={{ marginTop: 15 }} />
    <Hr variant="solid" style={{ marginTop: 15 }} />
  </MantineProvider>
));

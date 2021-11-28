import React from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { Wrapper } from './_wrapper';

storiesOf('@mantine/core/Drawer/stories', module).add('RTL', () => (
  <RtlProvider>
    <Wrapper />
  </RtlProvider>
));

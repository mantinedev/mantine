import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { Progress } from './Progress';

storiesOf('@mantine/core', module).add('Progress', () => (
  <MantineProvider>
    <div style={{ maxWidth: 500, padding: 50, marginLeft: 'auto', marginRight: 'auto' }}>
      <Progress value={0} />
      <Progress value={10} style={{ marginTop: 20 }} />
      <Progress value={20} style={{ marginTop: 20 }} />
      <Progress value={30} style={{ marginTop: 20 }} />
      <Progress value={40} style={{ marginTop: 20 }} />
      <Progress value={50} style={{ marginTop: 20 }} />
      <Progress value={60} style={{ marginTop: 20 }} size="xs" />
      <Progress value={70} style={{ marginTop: 20 }} color="red" size="sm" radius="lg" />
      <Progress value={80} style={{ marginTop: 20 }} color="orange" size="xl" radius={0} />
      <Progress value={90} style={{ marginTop: 20 }} color="indigo" size="lg" />
      <Progress value={100} style={{ marginTop: 20 }} color="teal" />
    </div>
  </MantineProvider>
));

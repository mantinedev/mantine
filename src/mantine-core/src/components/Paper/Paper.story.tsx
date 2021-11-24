import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paper } from './Paper';

storiesOf('@mantine/core/Paper', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Paper shadow="md" padding="md">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias cupiditate vero odio ad
      aspernatur animi fugit quos totam repellat. Eligendi, nostrum. Libero est nam neque, quaerat
      blanditiis rerum ullam obcaecati?
    </Paper>
  </div>
));

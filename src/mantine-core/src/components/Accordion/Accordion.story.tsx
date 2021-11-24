import React from 'react';
import { storiesOf } from '@storybook/react';
import { attachDemos } from '@mantine/ds';
import { Accordion } from './Accordion';
import * as demos from './demos';

const stories = storiesOf('@mantine/core/Accordion/demos', module);

attachDemos(stories, demos);

storiesOf('@mantine/core/Accordion', module).add('With sx', () => (
  <div style={{ padding: 40, maxWidth: 540 }}>
    <Accordion sx={(theme) => ({ backgroundColor: theme.colors.blue[5] })}>
      <Accordion.Item label="There" sx={{ backgroundColor: 'red' }}>
        Hello
      </Accordion.Item>
    </Accordion>
  </div>
));

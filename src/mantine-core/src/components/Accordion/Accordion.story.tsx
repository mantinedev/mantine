import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from './Accordion';
import { BASE_DATA } from './demos/_mockdata';
import { DarkStory } from '../../../demos';

const base = (
  <Accordion>
    {BASE_DATA.map((item) => (
      <Accordion.Item label={item.label} key={item.label}>
        {item.content}
      </Accordion.Item>
    ))}
  </Accordion>
);

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => <div style={{ padding: 40, maxWidth: 540 }}>{base}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40, maxWidth: 540 }}>{base}</div>
    </DarkStory>
  ));

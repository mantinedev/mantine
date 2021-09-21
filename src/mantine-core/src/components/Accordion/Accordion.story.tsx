import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';
import { BASE_DATA } from './demos/_mockdata';
import { DarkStory } from '../../../demos';

function Base(props: Partial<AccordionProps>) {
  return (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <Accordion {...props}>
        {BASE_DATA.map((item) => (
          <Accordion.Item label={item.label} key={item.label}>
            {item.content}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => <Base />)
  .add('Multiple selected items', () => <Base multiple />)
  .add('Dark theme', () => (
    <DarkStory>
      <Base />
    </DarkStory>
  ));

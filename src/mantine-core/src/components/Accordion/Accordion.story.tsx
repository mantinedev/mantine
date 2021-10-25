import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledAccordion } from './demos/stylesApi';
import { BaseDemo, baseDemoItems } from './demos/_base';
import { DarkStory } from '../../../demos';
import { IconReplaceDemo } from './demos/icon';
import { IconsReplacementDemo } from './demos/icons';
import { AccordionDemo } from './demos/label';
import { Accordion } from './Accordion';

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo />
    </div>
  ))
  .add('With sx', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <Accordion sx={(theme) => ({ backgroundColor: theme.colors.blue[5] })}>
        <Accordion.Item label="There" sx={{ backgroundColor: 'red' }}>
          Hello
        </Accordion.Item>
      </Accordion>
    </div>
  ))
  .add('Multiple selected items', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo multiple />
    </div>
  ))
  .add('Icon on the right', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo iconPosition="right" />
    </div>
  ))
  .add('Replace icon', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <IconReplaceDemo />
      <IconsReplacementDemo style={{ marginTop: 60 }} />
    </div>
  ))
  .add('Custom labels', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <AccordionDemo />
    </div>
  ))
  .add('Styles API', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <StyledAccordion>{baseDemoItems}</StyledAccordion>
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40, maxWidth: 540 }}>
        <BaseDemo />
        <StyledAccordion style={{ marginTop: 60 }}>{baseDemoItems}</StyledAccordion>
        <IconsReplacementDemo style={{ marginTop: 60 }} />
        <AccordionDemo style={{ marginTop: 60 }} />
      </div>
    </DarkStory>
  ));

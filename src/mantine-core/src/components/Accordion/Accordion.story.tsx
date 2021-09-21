import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledAccordion } from './demos/stylesApi';
import { BaseDemo, baseDemoItems } from './demos/_base';
import { DarkStory } from '../../../demos';

storiesOf('@mantine/core/Accordion', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo />
    </div>
  ))
  .add('Multiple selected items', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <BaseDemo multiple />
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
      </div>
    </DarkStory>
  ));

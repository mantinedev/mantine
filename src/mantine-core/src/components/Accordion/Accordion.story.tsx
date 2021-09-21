import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledAccordion } from './demos/stylesApi';
import { BaseDemo, baseDemoItems } from './demos/_base';
import { DarkStory } from '../../../demos';
import { IconReplaceDemo } from './demos/icon';
import { IconsReplacementDemo } from './demos/icons';

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
  .add('Replace icon', () => (
    <div style={{ padding: 40, maxWidth: 540 }}>
      <IconReplaceDemo />
      <IconsReplacementDemo style={{ marginTop: 60 }} />
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
      </div>
    </DarkStory>
  ));

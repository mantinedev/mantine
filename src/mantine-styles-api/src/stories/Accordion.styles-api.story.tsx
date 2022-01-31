import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@mantine/storybook';
import { createStyles, MantineProvider, Accordion } from '@mantine/core';
import { Accordion as AccordionStylesApi } from '../styles-api';

const styles = generateBorderStyles(AccordionStylesApi);
const useStyles = createStyles(() => styles);

const baseDemoItems = [
  <Accordion.Item label="First item">First content</Accordion.Item>,
  <Accordion.Item label="Second item">Second content</Accordion.Item>,
];

function WithClassNames() {
  return (
    <Accordion sx={{ maxWidth: 400 }} mx="auto" classNames={useStyles().classes}>
      {baseDemoItems}
    </Accordion>
  );
}

storiesOf('@mantine/core/Accordion/styles-api', module)
  .add('With sx', () => (
    <div style={{ padding: 40 }}>
      <Accordion sx={{ maxWidth: 400, border: '1px solid red' }} mx="auto">
        <Accordion.Item label="First item" sx={{ border: '1px solid blue' }}>
          First content
        </Accordion.Item>
        <Accordion.Item label="Second item" sx={{ border: '1px solid blue' }}>
          Second content
        </Accordion.Item>
      </Accordion>
    </div>
  ))
  .add('With styles as object', () => (
    <div style={{ padding: 40 }}>
      <Accordion sx={{ maxWidth: 400 }} mx="auto" styles={styles}>
        {baseDemoItems}
      </Accordion>
    </div>
  ))
  .add('With styles as function', () => (
    <div style={{ padding: 40 }}>
      <Accordion sx={{ maxWidth: 400 }} mx="auto" styles={() => styles}>
        {baseDemoItems}
      </Accordion>
    </div>
  ))
  .add('With styles as classNames', () => (
    <div style={{ padding: 40 }}>
      <WithClassNames />
    </div>
  ))
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Accordion: styles }}>
      <div style={{ padding: 40 }}>
        <Accordion sx={{ maxWidth: 400 }} mx="auto">
          {baseDemoItems}
        </Accordion>
      </div>
    </MantineProvider>
  ))
  .add('Accordion.Item styles api override', () => (
    <Accordion styles={{ icon: { border: '1px solid red' } }} sx={{ maxWidth: 400 }} mx="auto">
      <Accordion.Item label="Test">Test</Accordion.Item>
      <Accordion.Item label="Test" styles={{ icon: { border: '1px solid blue' } }}>
        Test
      </Accordion.Item>
    </Accordion>
  ));

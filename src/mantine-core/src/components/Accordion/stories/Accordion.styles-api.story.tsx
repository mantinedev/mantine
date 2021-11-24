import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@mantine/ds';
import { createStyles } from '@mantine/styles';
import { baseDemoItems } from '../demos/_base';
import { Accordion } from '../Accordion';
import { Accordion as AccordionStylesApi } from '../styles.api';

const styles = generateBorderStyles(AccordionStylesApi);
const useStyles = createStyles(() => styles);

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
        <Accordion.Item label="There" sx={(theme) => ({ color: theme.colors.blue[7] })}>
          Hello
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
  ));

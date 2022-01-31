import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/storybook/src';
import { TimelineProps } from '../Timeline';
import { Timeline as TimelineStylesApi } from '../styles.api';
import { TimelineBase } from '../demos/_base';

const styles = generateBorderStyles(TimelineStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TimelineProps>) {
  return <TimelineBase {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Timeline/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Timeline: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

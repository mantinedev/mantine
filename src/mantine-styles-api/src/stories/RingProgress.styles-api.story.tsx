import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  createStyles,
  MantineProvider,
  Text,
  RingProgress,
  RingProgressProps,
} from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { RingProgress as RingProgressStylesApi } from '../styles-api';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

const styles = generateBorderStyles(RingProgressStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<RingProgressProps>) {
  return (
    <RingProgress
      {...props}
      style={{ maxWidth: 500 }}
      mx="auto"
      mt="xl"
      sections={[{ value: 40, color: 'blue' }]}
      label={
        <Text color="blue" weight={700} align="center" size="xl">
          40%
        </Text>
      }
    >
      {paragraph}
    </RingProgress>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/RingProgress/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ RingProgress: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

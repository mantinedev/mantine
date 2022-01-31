import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Skeleton, SkeletonProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';

const styles = generateBorderStyles({ root: '' });
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<SkeletonProps>) {
  return (
    <Skeleton {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl">
      Test
    </Skeleton>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Skeleton/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Skeleton: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

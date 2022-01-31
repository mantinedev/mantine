import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Container, ContainerProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';

const styles = generateBorderStyles({ root: '' });
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ContainerProps>) {
  return (
    <Container {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl">
      Container
    </Container>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Container/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Container: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

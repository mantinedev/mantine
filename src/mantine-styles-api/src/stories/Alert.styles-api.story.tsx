import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Alert, AlertProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Alert as AlertStylesApi } from '../styles-api';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

const styles = generateBorderStyles(AlertStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<AlertProps>) {
  return (
    <Alert title="Test Alert" {...props} style={{ maxWidth: 420 }} mx="auto" mt="xl" icon="A">
      {paragraph}
    </Alert>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Alert/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'silver' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Alert: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

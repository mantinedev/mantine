import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { paragraph } from '@mantine/mockdata';
import { Alert, AlertProps } from '../Alert';
import { Alert as AlertStylesApi } from '../styles.api';

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

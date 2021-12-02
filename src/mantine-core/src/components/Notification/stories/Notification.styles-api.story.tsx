import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { paragraph } from '@mantine/mockdata';
import { Notification, NotificationProps } from '../Notification';
import { Notification as NotificationStylesApi } from '../styles.api';

const styles = generateBorderStyles(NotificationStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<NotificationProps>) {
  return (
    <Notification
      {...props}
      style={{ maxWidth: 500 }}
      mx="auto"
      mt="xl"
      onClose={() => {}}
      icon="I"
    >
      {paragraph}
    </Notification>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Notification/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Notification: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));

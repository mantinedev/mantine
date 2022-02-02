import React from 'react';
import { storiesOf } from '@storybook/react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { MantineProvider } from '@mantine/styles';
import { Alert } from './Alert';

storiesOf('@mantine/core/Alert/stories', module)
  .add('Content overflow', () => (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Alert title that is too large and will definitely take more that one line to render">
        Alert body
      </Alert>

      <Alert
        title="Alert title that is too large and will definitely take more that one line to render, but with close button this time"
        withCloseButton
        mt="xl"
      >
        Alert body
      </Alert>

      <Alert
        classNames={{ title: 'hello', root: 'there' }}
        title="AlertTitleWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout"
        mt="xl"
      >
        AlertBodyWithoutSpacesThatWillNotBreakToAnotherLineAndWillDamageTheLayout
      </Alert>
    </div>
  ))
  .add('All variants', () => (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert icon={<XCircleFillIcon size={16} />} title="Bummer!" color="red" variant="light">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        icon={<XCircleFillIcon size={16} />}
        title="Bummer!"
        color="red"
        variant="filled"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        icon={<XCircleFillIcon size={16} />}
        title="Bummer!"
        color="red"
        variant="outline"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Alert: { color: 'cyan', title: 'Context prop' } }}>
      <Alert title="Hello" sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Content
      </Alert>
      <Alert color="red" sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Content
      </Alert>
    </MantineProvider>
  ));

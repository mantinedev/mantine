import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert } from '../Alert';

storiesOf('@mantine/core/Alert/stories', module).add('Content overflow', () => (
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
));

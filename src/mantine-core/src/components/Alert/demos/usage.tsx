import React from 'react';
import { Alert } from '../Alert';
import { Text } from '../../Text/Text';

const code = `import React from 'react';
import { Alert, Text } from '@mantine/core';

function Demo() {
  return (
    <Alert color="red" title="Something went wrong">
      Application crashed, try refreshing the page,
      if it does not help please contact our support

      <br /><br />

      Error message:
      <Text color="red" size="sm">
        undefined is not a function
      </Text>
    </Alert>
  );
}`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert color="red" title="Something went wrong">
        Application crashed, try refreshing the page, if it does not help please contact our support
        <br />
        <br />
        Error message:
        <Text color="red" size="sm">
          undefined is not a function
        </Text>
      </Alert>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

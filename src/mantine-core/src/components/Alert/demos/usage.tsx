import React from 'react';
import { demoBase } from './_demo-base';
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
    <Alert color="red" title="Something went wrong">
      Application crashed, try refreshing the page, if it does not help please contact our support
      <br />
      <br />
      Error message:
      <Text color="red" size="sm">
        undefined is not a function
      </Text>
    </Alert>
  );
}

export const usage: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};

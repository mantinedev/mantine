import React from 'react';
import { demoBase } from './_demo-base';
import { Alert } from '../Alert';

export const code = `
<Alert color="red" title="Something went wrong">
  Application crashed, please contact out support via email
</Alert>

<Alert color="red">
  Application crashed, please contact out support via email
</Alert>
`;

export function Demo() {
  return (
    <>
      <Alert color="red" title="Something went wrong">
        Application crashed, please contact out support via email
      </Alert>

      <Alert color="red" style={{ marginTop: 15 }}>
        Application crashed, please contact out support via email
      </Alert>
    </>
  );
}

export const title: MantineDemo = {
  ...demoBase,
  type: 'demo',
  component: Demo,
  code,
};

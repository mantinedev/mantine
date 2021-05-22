import React from 'react';
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
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert color="red" title="Something went wrong">
        Application crashed, please contact out support via email
      </Alert>

      <Alert color="red" style={{ marginTop: 15 }}>
        Application crashed, please contact out support via email
      </Alert>
    </div>
  );
}

export const title: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

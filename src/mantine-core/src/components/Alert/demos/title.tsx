import React from 'react';
import { Alert } from '../Alert';

export const type = 'demo';

export const code = `
<Alert color="red" title="Something went wrong">
  Application crashed, try refreshing the page, if it does not help please contact our support
</Alert>

<Alert color="red" style={{ marginTop: 15 }}>
  Application crashed, try refreshing the page, if it does not help please contact our support
</Alert>
`;

export function Demo() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert color="red" title="Something went wrong">
        Application crashed, try refreshing the page, if it does not help please contact our support
      </Alert>

      <Alert color="red" style={{ marginTop: 15 }}>
        Application crashed, try refreshing the page, if it does not help please contact our support
      </Alert>
    </div>
  );
}

export default {
  type: 'demo',
  component: Demo,
  code,
};

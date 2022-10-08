import React from 'react';
import { Alert } from './Alert';

export default { title: 'Alert' };

export function Variants() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Bummer!" color="red" variant="light" withCloseButton>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert withCloseButton title="Bummer!" color="red" variant="filled" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        withCloseButton
        title="Something terrible happened! You made a mistake and there is no going back, your data was lost forever!"
        color="red"
        variant="outline"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

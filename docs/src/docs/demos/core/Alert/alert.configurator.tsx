import React from 'react';
import { Alert } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function AlertWrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `<Alert${props}>
  ${children}
</Alert>`;

export function AlertConfigurator() {
  return (
    <Configurator
      component={AlertWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'title', type: 'string', initialValue: 'Bummer!' },
        {
          name: 'children',
          type: 'string',
          initialValue:
            'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
        },
        { name: 'color', type: 'color', initialValue: 'red', defaultValue: 'blue' },
        { name: 'shadow', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      ]}
    />
  );
}

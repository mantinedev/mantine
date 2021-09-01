import React from 'react';
import { XCircleFillIcon } from '@primer/octicons-react';
import { demoBase } from './_demo-base';
import { Alert } from '../Alert';

function Wrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert {...props} icon={<XCircleFillIcon size={16} />} />
    </div>
  );
}

const codeTemplate = (
  props: string,
  children: string
) => `<Alert icon={<XCircleFillIcon size={16} />}${props}>
  ${children}
</Alert>`;

export const configurator: MantineDemo = {
  ...demoBase,
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Bummer!' },
    {
      name: 'children',
      type: 'string',
      initialValue:
        'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    },
    { name: 'color', type: 'color', initialValue: 'red', defaultValue: 'blue' },
  ],
};

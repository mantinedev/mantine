import React from 'react';
import { Alert } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
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
  const theme = useMantineTheme();
  return (
    <Configurator
      component={AlertWrapper}
      codeTemplate={codeTemplate}
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
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

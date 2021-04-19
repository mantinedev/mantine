import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Notification } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import Configurator from '../../../../components/Configurator/Configurator';

function NotificationWrapper(props: React.ComponentPropsWithoutRef<typeof Notification>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Notification onClose={() => {}} {...props} />
      <Notification style={{ marginTop: 15 }} icon={<CheckIcon />} onClose={() => {}} {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `<>
  <Notification${props}>
    ${children}
  </Notification>

  <Notification icon={<CheckIcon />}${props}>
    ${children}
  </Notification>
</>`;

export function NotificationConfigurator({ noCode = false }: { noCode: boolean }) {
  const theme = useMantineTheme();

  return (
    <Configurator
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]}
      component={NotificationWrapper}
      codeTemplate={codeTemplate}
      includeCode={!noCode}
      props={[
        { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
        { name: 'disallowClose', type: 'boolean', initialValue: false, defaultValue: false },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        {
          name: 'title',
          type: 'string',
          initialValue: 'We notify you that',
        },
        {
          name: 'children',
          type: 'string',
          initialValue: 'You are now obligated to give a star to Mantine project on Github',
        },
      ]}
    />
  );
}

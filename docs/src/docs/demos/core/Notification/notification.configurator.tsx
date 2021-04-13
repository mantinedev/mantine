import React from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { Notification } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';
import Configurator from '../../../../components/Configurator/Configurator';

function NotificationWrapper(props: React.ComponentPropsWithoutRef<typeof Notification>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Notification onClose={() => {}} {...props} />
      <Notification
        style={{ marginTop: DEFAULT_THEME.spacing.md }}
        icon={<CheckIcon />}
        onClose={() => {}}
        {...props}
      />
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

export function NotificationConfigurator() {
  return (
    <Configurator
      previewBackground={DEFAULT_THEME.colors.gray[0]}
      component={NotificationWrapper}
      codeTemplate={codeTemplate}
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

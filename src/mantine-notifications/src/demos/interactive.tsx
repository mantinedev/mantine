import React from 'react';
import { Group, Button, TextInput, useMantineTheme } from '@mantine/core';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useNotifications } from '../index';

const code = `import React from 'react';
import { Group, Button, TextInput } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        leftIcon={<EnvelopeClosedIcon />}
        onClick={() => {
          const id = notifications.showNotification({
            autoClose: false,
            disallowClose: true,
            title: 'Subscribe to email newsletter',
            message: (
              <>
                <div style={{ display: 'flex', paddingTop: 5 }}>
                  <TextInput
                    icon={<EnvelopeClosedIcon />}
                    placeholder="Enter your email"
                    style={{ flex: 1, marginRight: 15 }}
                  />
                  <Button
                    onClick={() => notifications.hideNotification(id)}
                    size="lg"
                    variant="outline"
                  >
                    Subscribe
                  </Button>
                </div>
              </>
            ),
          });
        }}
      >
        Subscribe to email newsletter
      </Button>
    </Group>
  );
}`;

function Demo() {
  const notifications = useNotifications();
  const theme = useMantineTheme();

  return (
    <Group position="center">
      <Button
        variant="outline"
        leftIcon={<EnvelopeClosedIcon />}
        onClick={() => {
          const id = notifications.showNotification({
            autoClose: false,
            disallowClose: true,
            title: 'Subscribe to email newsletter',
            message: (
              <>
                <div style={{ display: 'flex', paddingTop: 5 }}>
                  <TextInput
                    icon={<EnvelopeClosedIcon />}
                    placeholder="Enter your email"
                    style={{ flex: 1, marginRight: 15 }}
                    variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
                    inputStyle={{
                      backgroundColor: theme.colorScheme === 'dark' && theme.colors.dark[7],
                    }}
                  />
                  <Button onClick={() => notifications.hideNotification(id)} size="lg">
                    Subscribe
                  </Button>
                </div>
              </>
            ),
          });
        }}
      >
        Subscribe to email newsletter
      </Button>
    </Group>
  );
}

export const interactive: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

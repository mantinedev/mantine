import React from 'react';
import { Group, Button, TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { EnvelopeClosedIcon, PaperPlaneIcon } from '@modulz/radix-icons';
import { useNotifications } from '@mantine/notifications';

const code = `import React from 'react';
import { Group, Button, ActionIcon, TextInput } from '@mantine/core';
import { EnvelopeClosedIcon, PaperPlaneIcon } from '@modulz/radix-icons';
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
                  <ActionIcon
                    onClick={() => notifications.hideNotification(id)}
                    size={36}
                    color="blue"
                    variant="filled"
                  >
                    <PaperPlaneIcon />
                  </ActionIcon>
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
                    styles={{
                      input: {
                        backgroundColor: theme.colorScheme === 'dark' && theme.colors.dark[7],
                      },
                    }}
                  />
                  <ActionIcon
                    onClick={() => notifications.hideNotification(id)}
                    size={36}
                    color="blue"
                    variant="filled"
                  >
                    <PaperPlaneIcon />
                  </ActionIcon>
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

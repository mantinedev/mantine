import React from 'react';
import { ElementsGroup, Button, TextInput } from '@mantine/core';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useNotifications } from '@mantine/notifications';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ElementsGroup, Button, TextInput } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();
  
  return (
    <ElementsGroup position="center">
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
    </ElementsGroup>
  );
}`;

export function NotificationsInteractiveDemo() {
  const notifications = useNotifications();

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
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
      </ElementsGroup>
    </CodeDemo>
  );
}

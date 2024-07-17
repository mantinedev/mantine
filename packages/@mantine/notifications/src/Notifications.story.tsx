import { Button, Group } from '@mantine/core';
import { Notifications } from './Notifications';
import { showNotification } from './notifications.store';

export default { title: 'Notifications' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications autoClose={false} position="top-center" limit={5} />

      <Group>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'bottom-right' })
          }
        >
          bottom-right
        </Button>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'bottom-left' })
          }
        >
          bottom-left
        </Button>
        <Button
          onClick={() => showNotification({ message: 'Test', title: 'Test', position: 'top-left' })}
        >
          top-left
        </Button>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'top-right' })
          }
        >
          top-right
        </Button>
      </Group>
    </div>
  );
}

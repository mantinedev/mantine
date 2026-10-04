import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function saveDocument(shouldFail: boolean) {
  return new Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error'));
      } else {
        resolve({ name: 'report.pdf' });
      }
    }, 2000);
  });
}

function Demo() {
  const save = (shouldFail: boolean) =>
    notifications.promise(saveDocument(shouldFail), {
      loading: {
        title: 'Saving document',
        message: 'Please wait, it will take a couple of seconds',
      },
      success: (value) => ({
        title: 'Document saved',
        message: \`\${value.name} was saved successfully\`,
      }),
      error: (error) => ({
        title: 'Failed to save document',
        message: (error as Error).message,
      }),
    });

  return (
    <Group justify="center">
      <Button onClick={() => save(false)}>Save document</Button>
      <Button color="red" onClick={() => save(true)}>
        Save document (fails)
      </Button>
    </Group>
  );
}
`;

function saveDocument(shouldFail: boolean) {
  return new Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error'));
      } else {
        resolve({ name: 'report.pdf' });
      }
    }, 2000);
  });
}

function Demo() {
  const save = (shouldFail: boolean) =>
    notifications.promise(saveDocument(shouldFail), {
      loading: {
        title: 'Saving document',
        message: 'Please wait, it will take a couple of seconds',
      },
      success: (value) => ({
        title: 'Document saved',
        message: `${value.name} was saved successfully`,
      }),
      error: (error) => ({
        title: 'Failed to save document',
        message: (error as Error).message,
      }),
    });

  return (
    <Group justify="center">
      <Button onClick={() => save(false)}>Save document</Button>
      <Button color="red" onClick={() => save(true)}>
        Save document (fails)
      </Button>
    </Group>
  );
}

export const promise: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

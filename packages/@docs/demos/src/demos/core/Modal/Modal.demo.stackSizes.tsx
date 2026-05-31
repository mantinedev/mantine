import { Button, Group, Modal, useModalsStack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['background', 'foreground']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('background')} title="Large background modal" size="xl">
          This modal is larger than the one opened on top of it. Open the next modal to see how the
          stack transform behaves when the background modal is wider than the top one.
          <Group mt="lg">
            <Button onClick={() => stack.open('foreground')}>Open smaller modal</Button>
          </Group>
        </Modal>

        <Modal {...stack.register('foreground')} title="Small modal on top" size="sm">
          This modal is smaller than the modal behind it.
          <Group mt="lg">
            <Button variant="default" onClick={stack.closeAll}>
              Close all
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button onClick={() => stack.open('background')}>Open modals stack</Button>
    </>
  );
}
`;

function Demo() {
  const stack = useModalsStack(['background', 'foreground']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('background')} title="Large background modal" size="xl">
          This modal is larger than the one opened on top of it. Open the next modal to see how the
          stack transform behaves when the background modal is wider than the top one.
          <Group mt="lg">
            <Button onClick={() => stack.open('foreground')}>Open smaller modal</Button>
          </Group>
        </Modal>

        <Modal {...stack.register('foreground')} title="Small modal on top" size="sm">
          This modal is smaller than the modal behind it.
          <Group mt="lg">
            <Button variant="default" onClick={stack.closeAll}>
              Close all
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button onClick={() => stack.open('background')}>Open modals stack</Button>
    </>
  );
}

export const stackSizes: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};

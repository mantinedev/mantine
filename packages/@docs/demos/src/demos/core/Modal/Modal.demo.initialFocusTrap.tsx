import { Button, FocusTrap, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const initialFocusTrap: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};

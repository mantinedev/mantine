import { Button, Drawer, FocusTrap, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
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

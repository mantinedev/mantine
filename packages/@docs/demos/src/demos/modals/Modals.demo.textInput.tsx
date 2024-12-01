import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () =>
    modals.openTextInputModal({
      modalId: 'test-id',
      title: 'Please enter your name',
      topSection: <Text size="sm">Top section is rendered here.</Text>,
      bottomSection: <Text size="sm">Bottom section is rendered here.</Text>,
      onCancel: () => console.log('Cancel'),
      onConfirm: (value) => console.log(\`Confirm with value \${value}\`),
    });

  return <Button onClick={openModal}>Open text input modal</Button>;
}
`;

function Demo() {
  const openModal = () =>
    modals.openTextInputModal({
      modalId: 'test-id',
      title: 'Please enter your name',
      topSection: <Text size="sm">Top section is rendered here.</Text>,
      bottomSection: <Text size="sm">Bottom section is rendered here.</Text>,
      onCancel: () =>
        notifications.show({
          title: 'Canceled',
          message: 'TextInput modal was canceled',
          color: 'gray',
        }),
      onConfirm: (value) =>
        notifications.show({
          title: 'Confirmed',
          message: `TextInputModal was confirmed with input ${value}`,
          color: 'teal',
        }),
    });

  return <Button onClick={openModal}>Open text input modal</Button>;
}

export const textInput: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};

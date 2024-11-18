import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const handleOpenUpdatableContextModal = () => {
    const modalId = modals.openContextModal('demonstration', {
      title: 'Processing...',
      innerProps: {
        modalBody: 'You cannot close the modal during this operation.',
      },
      closeOnEscape: false,
      closeOnClickOutside: false,
    });

    setTimeout(() => {
      modals.updateContextModal({
        modalId,
        title: 'Processing Complete!',
        innerProps: {
          modalBody: 'You can now close this modal.',
        },
        closeOnEscape: true,
        closeOnClickOutside: true,
      });
    }, 2000);
  };

  return (
    <Button onClick={handleOpenUpdatableContextModal}>
      Open Updatable Context Modal
    </Button>
  );
}
`;

function Demo() {
  const handleOpenUpdatableContextModal = () => {
    const modalId = modals.openContextModal('demonstration', {
      title: 'Processing...',
      innerProps: {
        modalBody: 'You cannot close the modal during this operation.',
      },
      closeOnEscape: false,
      closeOnClickOutside: false,
    });

    setTimeout(() => {
      modals.updateContextModal({
        modalId,
        title: 'Processing Complete!',
        innerProps: {
          modalBody: 'You can now close this modal.',
        },
        closeOnEscape: true,
        closeOnClickOutside: true,
      });
    }, 2000);
  };

  return (
    <Button onClick={handleOpenUpdatableContextModal}>
      Open Updatable Context Modal
    </Button>
  );
}

export const updateContextModal: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};

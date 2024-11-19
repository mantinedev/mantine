import {Button, Loader, Text} from '@mantine/core';
import {ContextModalProps, modals} from '@mantine/modals';
import { MantineDemo } from '@mantinex/demo';

const code = `

`;

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.openContextModal({
          modal: 'asyncDemonstration',
          title: 'Processing...',
          closeOnEscape: false,
          closeOnClickOutside: false,
          closeButtonProps:{ disabled:true },
          innerProps: {
            modalBody:
              'You cannot close this modal until 2 seconds have passed.',
            loading: true,
          },
        });

        setTimeout(() => {
          modals.updateContextModal({
            modalId,
            title: "Processing Complete!",
            closeOnEscape: true,
            closeOnClickOutside: true,
            closeButtonProps:{ disabled: false },
            innerProps: {
              modalBody:
                'You can now close the modal.',
              loading: false,
            },
          })
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}

export const updateContextModal: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};

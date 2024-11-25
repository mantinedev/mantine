import { Button, em, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
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
  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

export const fullScreenMobile: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};

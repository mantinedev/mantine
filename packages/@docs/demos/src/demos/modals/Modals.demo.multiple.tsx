import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openMultipleModals = () => {
    modals.open({
      title: 'First Modal',
      children: (
        <>
          <Text size="sm" mb="md">
            This modal will stay open when you open the next one.
          </Text>
          <Button
            onClick={() => {
              modals.open({
                title: 'Second Modal',
                children: (
                  <Text size="sm">
                    This modal is opened on top of the first one!
                  </Text>
                ),
                shouldReplaceExistingModal: false,
              });
            }}
          >
            Open Second Modal
          </Button>
        </>
      ),
      shouldReplaceExistingModal: false,
    });
  };

  return (
    <Button onClick={openMultipleModals}>
      Open Multiple Modals
    </Button>
  );
}
`;

function Demo() {
  const openMultipleModals = () => {
    modals.open({
      title: 'First Modal',
      children: (
        <>
          <Text size="sm" mb="md">
            This modal will stay open when you open the next one.
          </Text>
          <Button
            onClick={() => {
              modals.open({
                title: 'Second Modal',
                children: <Text size="sm">This modal is open on top of the first one!</Text>,
                shouldReplaceExistingModal: false,
              });
            }}
          >
            Open Second Modal
          </Button>
        </>
      ),
      shouldReplaceExistingModal: false,
    });
  };

  return <Button onClick={openMultipleModals}>Open Multiple Modals</Button>;
}

export const multiple: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};

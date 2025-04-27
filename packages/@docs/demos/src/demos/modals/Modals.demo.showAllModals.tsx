import { Button, Text } from '@mantine/core';
import { ModalsProvider, useModals } from '@mantine/modals';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Text } from '@mantine/core';
import { ModalsProvider, useModals } from '@mantine/modals';

const DemoContent = () => {
  const modals = useModals();

  return (
    <Button
      onClick={() => {
        modals.openModal({
        title: 'Modal 1',
        size: 'lg',
        children: (
          <div>
            <Text>This is modal 1</Text>
            <Button
              fullWidth
              mt="md"
              onClick={() => {
                modals.openModal({
                  title: 'Modal 2',
                  children: <div>This is modal 2</div>
                });
              }}
            >
              Open modal 2
            </Button>
          </div>
        ),
      });
    }}
    >
      Open multiple modals
    </Button>
  );
};

function Demo() {
  return (
    <ModalsProvider showAllModals>
      <DemoContent />
    </ModalsProvider>
  );
}
`;

const DemoContent = () => {
  const modals = useModals();

  return (
    <Button
      onClick={() => {
        modals.openModal({
        title: 'Modal 1',
        size: 'lg',
        children: (
          <div>
            <Text>This is modal 1</Text>
            <Button
              fullWidth
              mt="md"
              onClick={() => {
                modals.openModal({
                  title: 'Modal 2',
                  children: <div>This is modal 2</div>
                });
              }}
            >
              Open modal 2
            </Button>
          </div>
        ),
      });
    }}
    >
      Open multiple modals
    </Button>
  );
};

function Demo() {
  return (
    <ModalsProvider showAllModals>
      <DemoContent />
    </ModalsProvider>
  );
}

export const showAllModals: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
}; 
import { Button, CloseButton, Group, Paper, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, CloseButton, Group, Paper, Text } from '@mantine/core';
import { useDisclosure, useFloatingWindow } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button
          onClick={() => floatingWindow.setPosition({ bottom: 40, right: 40 })}
          variant="default"
        >
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <Paper
          w={280}
          p="md"
          withBorder
          radius="md"
          pos="fixed"
          style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
          shadow={floatingWindow.isDragging ? 'md' : undefined}
          ref={floatingWindow.ref}
        >
          <Group justify="space-between" mb="md">
            <Text>Set position demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const [visible, handlers] = useDisclosure();
  const floatingWindow = useFloatingWindow({
    constrainToViewport: true,
    constrainOffset: 20,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 20 },
  });

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button
          onClick={() => floatingWindow.setPosition({ bottom: 40, right: 40 })}
          variant="default"
        >
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <Paper
          w={280}
          p="md"
          withBorder
          radius="md"
          pos="fixed"
          style={{ cursor: 'move', transition: 'box-shadow 70ms ease', zIndex: 400 }}
          shadow={floatingWindow.isDragging ? 'md' : undefined}
          ref={floatingWindow.ref}
        >
          <Group justify="space-between" mb="md">
            <Text>Set position demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </Paper>
      )}
    </>
  );
}

export const useFloatingWindowSetPositionDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};

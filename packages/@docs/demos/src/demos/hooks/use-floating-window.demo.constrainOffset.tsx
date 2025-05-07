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
    constrainOffset: 30,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 30 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

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
            <Text>Constrain offset demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            This floating window has 30px offset, it cannot move closer that 30px to the edge of the
            viewport.
          </Text>
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
    constrainOffset: 30,
    excludeDragHandleSelector: 'button',
    initialPosition: { top: 300, left: 30 },
  });

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

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
            <Text>Constrain offset demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            This floating window has 30px offset, it cannot move closer that 30px to the edge of the
            viewport.
          </Text>
        </Paper>
      )}
    </>
  );
}

export const useFloatingWindowConstrainOffsetDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};

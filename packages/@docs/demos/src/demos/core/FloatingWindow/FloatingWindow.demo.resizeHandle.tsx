import { NotchesIcon } from '@phosphor-icons/react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NotchesIcon } from '@phosphor-icons/react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          withBorder
          constrainOffset={40}
          dimensions={{
            initialWidth: 260,
            maxWidth: 500,
            minWidth: 180,
            initialHeight: 260,
            maxHeight: 400,
            minHeight: 220,
          }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 60 }}
          style={{ overflow: 'hidden' }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text fw={500} fz="sm">
              Resize demo
            </Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag the grip icon in the bottom-right corner to resize.
            Use Arrow keys when the handle is focused:
            Left/Right for width, Up/Down for height.
          </Text>
          <FloatingWindow.ResizeHandle
            aria-label="Resize floating window"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'nwse-resize',
            }}
          >
            <NotchesIcon size={14} style={{ opacity: 0.5 }} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}
`;

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          withBorder
          constrainOffset={40}
          dimensions={{
            initialWidth: 260,
            maxWidth: 500,
            minWidth: 180,
            initialHeight: 260,
            maxHeight: 400,
            minHeight: 220,
          }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 60 }}
          style={{ overflow: 'hidden' }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text fw={500} fz="sm">
              Resize demo
            </Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag the grip icon in the bottom-right corner to resize. Use Arrow keys when the handle
            is focused: Left/Right for width, Up/Down for height.
          </Text>
          <FloatingWindow.ResizeHandle
            aria-label="Resize floating window"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'nwse-resize',
            }}
          >
            <NotchesIcon size={14} style={{ opacity: 0.5 }} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}

export const resizeHandle: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};

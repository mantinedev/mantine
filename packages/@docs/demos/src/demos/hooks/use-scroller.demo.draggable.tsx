import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ draggable: false });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">draggable: false</Text>
      </Group>

      <div
        ref={scroller.ref}
        style={{
          overflow: 'auto',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`;

function Demo() {
  const scroller = useScroller({ draggable: false });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">
          draggable: false
        </Text>
      </Group>

      <div
        ref={scroller.ref}
        style={{
          overflow: 'auto',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}

export const useScrollerDraggableDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

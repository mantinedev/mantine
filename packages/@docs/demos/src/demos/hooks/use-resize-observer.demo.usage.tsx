import { Code, Group, Text, useMantineTheme } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Code } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <textarea ref={ref} style={{ width: 400, height: 120 }} />
      <Text ta="center">Rect: <Code>{JSON.stringify(rect)}</Code></Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [ref, rect] = useResizeObserver();

  return (
    <>
      <Text ta="center" size="sm" mb="xs">
        Resize textarea by dragging its right bottom corner
      </Text>

      <Group justify="center">
        <textarea
          ref={ref}
          style={{
            width: 400,
            height: 120,
            border: 'none',
            backgroundColor: 'var(--mantine-color-body)',
            position: 'relative',
          }}
        />
      </Group>
      <Text ta="center" style={{ marginTop: theme.spacing.sm }}>
        Rect: <Code>{JSON.stringify(rect, null, 2)}</Code>
      </Text>
    </>
  );
}

export const useResizeObserverDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  dimmed: true,
};

import { useState } from 'react';
import { Code, Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - 8px)\`,
              top: \`calc(\${value.y * 100}% - 8px)\`,
              width: 16,
              height: 16,
              backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: `calc(${value.x * 100}% - 8px)`,
              top: `calc(${value.y * 100}% - 8px)`,
              width: 16,
              height: 16,
              backgroundColor: active
                ? 'var(--mantine-color-teal-7)'
                : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</Code>
      </Text>
    </>
  );
}

export const useMoveUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

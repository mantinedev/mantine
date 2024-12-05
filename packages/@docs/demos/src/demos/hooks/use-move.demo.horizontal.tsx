import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - 8px)\`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: `${value * 100}%`,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: `calc(${value * 100}% - 8px)`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}

export const useMoveHorizontal: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

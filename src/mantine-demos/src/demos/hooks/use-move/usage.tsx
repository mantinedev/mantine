import React, { useState } from 'react';
import { useMantineTheme, Group, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useMantineTheme, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: 400,
          height: 120,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
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
            backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7],
          }}
        />
      </div>

      <Text>
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 120,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
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
              backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7],
            }}
          />
        </div>
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Values <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</Code>
      </Text>
    </>
  );
}

export const useMoveUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

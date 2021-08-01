import React, { useState } from 'react';
import { useMantineTheme, Group } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useMantineTheme } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  const overlayStyles = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };

  return (
    <Group position="center">
      <div
        ref={ref}
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(90deg, #fff, transparent)' }}
        />
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(0deg, #000, transparent)' }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - 8px)\`,
            top: \`calc(\${value.y * 100}% - 8px)\`,
            width: 16,
            height: 16,
            border: '2px solid #fff',
            borderRadius: 16,
            boxShadow: theme.shadows.sm,
          }}
        />
      </div>
    </Group>
  );
}`;

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  const overlayStyles: any = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };

  return (
    <Group position="center">
      <div
        ref={ref}
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(90deg, #fff, transparent)' }}
        />
        <div
          style={{ ...overlayStyles, backgroundImage: 'linear-gradient(0deg, #000, transparent)' }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: `calc(${value.x * 100}% - 8px)`,
            top: `calc(${value.y * 100}% - 8px)`,
            width: 16,
            height: 16,
            border: '2px solid #fff',
            borderRadius: 16,
            boxShadow: theme.shadows.sm,
          }}
        />
      </div>
    </Group>
  );
}

export const useMoveColor: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

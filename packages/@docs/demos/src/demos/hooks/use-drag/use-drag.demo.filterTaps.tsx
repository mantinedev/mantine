import { useState } from 'react';
import { Badge, Group, Text, UnstyledButton } from '@mantine/core';
import { useDrag } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Badge, Group, Text, UnstyledButton } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <>
      <Group justify="center">
        <UnstyledButton
          ref={ref}
          style={{
            width: 200,
            height: 80,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            cursor: active ? 'grabbing' : 'pointer',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Click or drag me
        </UnstyledButton>
      </Group>

      <Group justify="center" mt="md" gap="lg">
        <Text size="sm">
          Taps: <Badge>{taps}</Badge>
        </Text>
        <Text size="sm">
          Drags: <Badge color="teal">{drags}</Badge>
        </Text>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [taps, setTaps] = useState(0);
  const [drags, setDrags] = useState(0);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        if (state.tap) {
          setTaps((t) => t + 1);
        } else {
          setDrags((d) => d + 1);
        }
      }
    },
    { filterTaps: true, threshold: 5 }
  );

  return (
    <>
      <Group justify="center">
        <UnstyledButton
          ref={ref}
          style={{
            width: 200,
            height: 80,
            backgroundColor: active
              ? 'var(--mantine-color-teal-filled)'
              : 'var(--mantine-color-blue-filled)',
            borderRadius: 'var(--mantine-radius-md)',
            cursor: active ? 'grabbing' : 'pointer',
            touchAction: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--mantine-color-white)',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          Click or drag me
        </UnstyledButton>
      </Group>

      <Group justify="center" mt="md" gap="lg">
        <Text size="sm">
          Taps: <Badge>{taps}</Badge>
        </Text>
        <Text size="sm">
          Drags: <Badge color="teal">{drags}</Badge>
        </Text>
      </Group>
    </>
  );
}

export const filterTaps: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

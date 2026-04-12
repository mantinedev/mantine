import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-default-border)',
          padding: 'var(--mantine-spacing-md)',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 80,
              marginRight: 12,
              backgroundColor: \`hsl(\${i * 18}, 60%, 70%)\`,
              borderRadius: 'var(--mantine-radius-sm)',
              fontWeight: 600,
              verticalAlign: 'top',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag horizontally to scroll
      </Text>
    </>
  );
}
`;

function Demo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref, active } = useDrag(
    (state) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= state.delta[0];
      }
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  return (
    <>
      <div
        ref={assignRef}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: active ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          userSelect: 'none',
          borderRadius: 'var(--mantine-radius-md)',
          border: '1px solid var(--mantine-color-default-border)',
          padding: 'var(--mantine-spacing-md)',
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 80,
              marginRight: 12,
              backgroundColor: `hsl(${i * 18}, 60%, 70%)`,
              borderRadius: 'var(--mantine-radius-sm)',
              fontWeight: 600,
              verticalAlign: 'top',
              color: 'var(--mantine-color-black)',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <Text ta="center" mt="sm" size="sm" c="dimmed">
        Drag horizontally to scroll
      </Text>
    </>
  );
}

export const scroll: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

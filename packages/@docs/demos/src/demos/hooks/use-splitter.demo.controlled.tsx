import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    sizes,
    onSizeChange: setSizes,
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          border: '1px solid var(--mantine-color-default-border)',
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: \`\${splitter.sizes[0]}%\`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-light)',
          }}
        >
          {Math.round(splitter.sizes[0])}%
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            backgroundColor: 'var(--mantine-color-default-border)',
            cursor: 'col-resize',
            touchAction: 'none',
          }}
        />
        <div
          style={{
            width: \`\${splitter.sizes[1]}%\`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-light)',
          }}
        >
          {Math.round(splitter.sizes[1])}%
        </div>
      </div>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" variant="light" onClick={() => setSizes([30, 70])}>30/70</Button>
        <Button size="xs" variant="light" onClick={() => setSizes([50, 50])}>50/50</Button>
        <Button size="xs" variant="light" onClick={() => setSizes([70, 30])}>70/30</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    sizes,
    onSizeChange: setSizes,
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          border: '1px solid var(--mantine-color-default-border)',
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${splitter.sizes[0]}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-light)',
          }}
        >
          {Math.round(splitter.sizes[0])}%
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            backgroundColor: 'var(--mantine-color-default-border)',
            cursor: 'col-resize',
            touchAction: 'none',
          }}
        />
        <div
          style={{
            width: `${splitter.sizes[1]}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-light)',
          }}
        >
          {Math.round(splitter.sizes[1])}%
        </div>
      </div>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" variant="light" onClick={() => setSizes([30, 70])}>
          30/70
        </Button>
        <Button size="xs" variant="light" onClick={() => setSizes([50, 50])}>
          50/50
        </Button>
        <Button size="xs" variant="light" onClick={() => setSizes([70, 30])}>
          70/30
        </Button>
      </Group>
    </>
  );
}

export const useSplitterControlled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

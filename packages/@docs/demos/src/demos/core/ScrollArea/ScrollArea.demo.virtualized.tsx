import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Box, ScrollArea, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Box, ScrollArea, Text } from '@mantine/core';

const ROW_HEIGHT = 36;
const rows = Array.from({ length: 10000 }, (_, index) => \`Row \${index + 1}\`);

function Demo() {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => viewport,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
  });

  return (
    <ScrollArea h={300} viewportRef={setViewport}>
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <Box
            key={virtualRow.key}
            px="md"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size,
              transform: \`translateY(\${virtualRow.start}px)\`,
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--mantine-color-default-border)',
            }}
          >
            <Text size="sm">{rows[virtualRow.index]}</Text>
          </Box>
        ))}
      </div>
    </ScrollArea>
  );
}
`;

const ROW_HEIGHT = 36;
const rows = Array.from({ length: 10000 }, (_, index) => `Row ${index + 1}`);

function Demo() {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => viewport,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
  });

  return (
    <ScrollArea h={300} viewportRef={setViewport}>
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <Box
            key={virtualRow.key}
            px="md"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualRow.size,
              transform: `translateY(${virtualRow.start}px)`,
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid var(--mantine-color-default-border)',
            }}
          >
            <Text size="sm">{rows[virtualRow.index]}</Text>
          </Box>
        ))}
      </div>
    </ScrollArea>
  );
}

export const virtualized: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};

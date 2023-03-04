import React, { useRef } from 'react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

const code = `
import { MultiSelect } from '@mantine/core';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

const DEFAULT_HEIGHT = 38;

function Demo() {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const goToIndex = (index: number) => {
    virtuosoRef.current.scrollToIndex({
      index,
      align: 'center',
    });
  };

  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={Array(9999)
        .fill(0)
        .map((_, index) => \`Item \${index}\`)}
      label="Select an item"
      placeholder="Pick all you want"
      nothingFound="No options"
      virtualizedList={({ items }) => {
        const height = Math.min(items.length * DEFAULT_HEIGHT, 210);
        return (
          <Virtuoso
            ref={virtuosoRef}
            style={{ height }}
            data={items}
            overscan={200}
            itemContent={(_, item) => item}
          />
        );
      }}
      moveThroughVirtualList={goToIndex}
    />
  );
}
`;

const DEFAULT_HEIGHT = 38;

function Demo() {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const goToIndex = (index: number) => {
    virtuosoRef.current.scrollToIndex({
      index,
      align: 'center',
    });
  };

  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={Array(9999)
        .fill(0)
        .map((_, index) => `Item ${index}`)}
      label="Select an item"
      placeholder="Pick all you want"
      nothingFound="No options"
      virtualizedList={({ items }) => {
        const height = Math.min(items.length * DEFAULT_HEIGHT, 220);
        return (
          <Virtuoso
            ref={virtuosoRef}
            style={{ height }}
            data={items}
            overscan={200}
            itemContent={(_, item) => item}
          />
        );
      }}
      moveThroughVirtualList={goToIndex}
    />
  );
}

export const virtualized: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

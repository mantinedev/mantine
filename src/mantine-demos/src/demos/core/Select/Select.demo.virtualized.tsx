import React, { useRef } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Select } from '@mantine/core';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';

const code = `
import { Select } from '@mantine/core';
import { Virtuoso } from 'react-virtuoso';

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
    <Select
      maw={320}
      mx="auto"
      label="Select an item"
      placeholder="Pick one"
      nothingFound="No options"
      data={Array(9999)
        .fill(0)
        .map((_, index) => \`Item \${index}\`)}
      withinPortal
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
    <Select
      maw={320}
      mx="auto"
      label="Select an item"
      placeholder="Pick one"
      nothingFound="No options"
      data={Array(9999)
        .fill(0)
        .map((_, index) => `Item ${index}`)}
      withinPortal
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

export const virtualized: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

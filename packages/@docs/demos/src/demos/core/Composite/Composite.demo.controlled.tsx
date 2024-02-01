import React, { Key, useState } from 'react';
import { Divider, Flex, Paper, ScrollArea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { mantineComponents } from './_data';
import { ComponentCardCell } from './Composite.ComponentCardCell';
import { LayoutGrid } from './Composite.LayoutGrid';

function Demo() {
  const [selections, setSelections] = useState<Key[]>([]);

  return (
    <Flex direction="column">
      <ScrollArea h="30rem">
        <LayoutGrid
          value={selections}
          onChange={setSelections}
          selectionOptions={{
            multiple: true,
          }}
          focusOptions={{
            loop: true,
            moveToNextRow: true,
          }}
          items={mantineComponents}
          getItemKey={(item) => item.slug}
          renderItem={(item, { selected, disabled }, itemProps) => (
            <ComponentCardCell item={item} selected={selected} disabled={disabled} {...itemProps} />
          )}
        />
      </ScrollArea>
      <Divider />
      <Paper p="sm">Selected component count: {selections.length}</Paper>
    </Flex>
  );
}

const demoCode = `
function Demo() {
  const [selections, setSelections] = useState<Key[]>([]);

  return (
    <Flex direction="column">
      <ScrollArea h="30rem">
        <LayoutGrid
          value={selections}
          onChange={setSelections}
          selectionOptions={{
            multiple: true,
          }}
          focusOptions={{
            loop: true,
            moveToNextRow: true,
          }}
          items={mantineComponents}
          getItemKey={(item) => item.slug}
          renderItem={(item, { selected, disabled }, itemProps) => (
            <ComponentCardCell item={item} selected={selected} disabled={disabled} {...itemProps} />
          )}
        />
      </ScrollArea>
      <Divider />
      <Paper p="sm">Selected component count: {selections.length}</Paper>
    </Flex>
  );
}
`;

export const controlledComposite: MantineDemo = {
  type: 'code',
  component: Demo,
  code: demoCode,
  centered: true,
  withPadding: false,
};

import { useState } from 'react';
import { TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(['first', 'second', 'third']);

  return (
    <TagsInput
      label="Drag pills to reorder"
      description="Tags can be reordered by dragging pills"
      placeholder="Enter tag"
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(['first', 'second', 'third']);

  return (
    <TagsInput
      label="Drag pills to reorder"
      description="Tags can be reordered by dragging pills"
      placeholder="Enter tag"
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}

export const dragReorder: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};

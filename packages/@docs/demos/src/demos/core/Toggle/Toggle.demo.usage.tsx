import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from '@phosphor-icons/react';
import { Group, Toggle } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from '@phosphor-icons/react';
import { Group, Toggle } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Toggle aria-label="Bold">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle aria-label="Italic">
        <TextItalicIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle aria-label="Underline">
        <TextUnderlineIcon weight="bold" size="100%" />
      </Toggle>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Toggle aria-label="Bold">
        <TextBIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle aria-label="Italic">
        <TextItalicIcon weight="bold" size="100%" />
      </Toggle>
      <Toggle aria-label="Underline">
        <TextUnderlineIcon weight="bold" size="100%" />
      </Toggle>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};

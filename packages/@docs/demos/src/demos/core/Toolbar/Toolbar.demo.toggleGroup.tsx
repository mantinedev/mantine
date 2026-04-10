import { useState } from 'react';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@phosphor-icons/react';
import { Toolbar } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@phosphor-icons/react';
import { Toolbar } from '@mantine/core';

function Demo() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<string | null>('left');

  return (
    <Toolbar>
      <Toolbar.ToggleGroup type="multiple" value={formatting} onChange={setFormatting}>
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <TextBIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic">
          <TextItalicIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="underline" aria-label="Underline">
          <TextUnderlineIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Divider />

      <Toolbar.ToggleGroup type="single" value={alignment} onChange={setAlignment}>
        <Toolbar.ToggleItem value="left" aria-label="Align left">
          <TextAlignLeftIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" aria-label="Align center">
          <TextAlignCenterIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="right" aria-label="Align right">
          <TextAlignRightIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
    </Toolbar>
  );
}
`;

function Demo() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<string | null>('left');

  return (
    <Toolbar>
      <Toolbar.ToggleGroup type="multiple" value={formatting} onChange={setFormatting}>
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <TextBIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic">
          <TextItalicIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="underline" aria-label="Underline">
          <TextUnderlineIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Divider />

      <Toolbar.ToggleGroup type="single" value={alignment} onChange={setAlignment}>
        <Toolbar.ToggleItem value="left" aria-label="Align left">
          <TextAlignLeftIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" aria-label="Align center">
          <TextAlignCenterIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="right" aria-label="Align right">
          <TextAlignRightIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
    </Toolbar>
  );
}

export const toggleGroup: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

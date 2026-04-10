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
  return (
    <Toolbar>
      <Toolbar.ToggleGroup type="multiple">
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <TextBIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic" disabled>
          <TextItalicIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="underline" aria-label="Underline">
          <TextUnderlineIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Divider />

      <Toolbar.ToggleGroup type="single" defaultValue="left" disabled>
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
  return (
    <Toolbar>
      <Toolbar.ToggleGroup type="multiple">
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <TextBIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic" disabled>
          <TextItalicIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="underline" aria-label="Underline">
          <TextUnderlineIcon weight="bold" size="100%" />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>

      <Toolbar.Divider />

      <Toolbar.ToggleGroup type="single" defaultValue="left" disabled>
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

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

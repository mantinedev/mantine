import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@phosphor-icons/react';
import { Stack, Toolbar } from '@mantine/core';
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
import { Stack, Toolbar } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Toolbar variant="filled" color="lime.4">
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold']}>
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

        <Toolbar.ToggleGroup type="single" defaultValue="left">
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

      <Toolbar autoContrast variant="filled" color="lime.4">
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold']}>
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

        <Toolbar.ToggleGroup type="single" defaultValue="left">
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
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Toolbar variant="filled" color="lime.4">
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold']}>
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

        <Toolbar.ToggleGroup type="single" defaultValue="left">
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

      <Toolbar autoContrast variant="filled" color="lime.4">
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold']}>
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

        <Toolbar.ToggleGroup type="single" defaultValue="left">
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
    </Stack>
  );
}

export const autoContrast: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};

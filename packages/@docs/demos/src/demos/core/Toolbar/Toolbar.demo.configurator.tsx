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
    <Toolbar{{props}}>
      <Toolbar.ToggleGroup type="multiple">
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
  );
}
`;

function Wrapper(props: any) {
  return (
    <Toolbar {...props}>
      <Toolbar.ToggleGroup type="multiple">
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
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'orientation',
      type: 'segmented',
      data: ['horizontal', 'vertical'],
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
    },
    {
      prop: 'variant',
      type: 'segmented',
      data: ['filled', 'light'],
      initialValue: 'filled',
      libraryValue: 'filled',
    },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: null },
    { prop: 'autoContrast', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'withBorder', type: 'boolean', initialValue: true, libraryValue: true },
  ],
};

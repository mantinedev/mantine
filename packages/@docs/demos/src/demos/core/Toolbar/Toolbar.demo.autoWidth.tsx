import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react';
import { Toolbar } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react';
import { Toolbar } from '@mantine/core';

function Demo() {
  return (
    <Toolbar>
      <Toolbar.Toggle aria-label="Bold">
        <TextBIcon weight="bold" size="100%" />
      </Toolbar.Toggle>
      <Toolbar.Toggle aria-label="Italic">
        <TextItalicIcon weight="bold" size="100%" />
      </Toolbar.Toggle>

      <Toolbar.Divider />

      <Toolbar.Toggle autoWidth>Save</Toolbar.Toggle>
      <Toolbar.Toggle autoWidth>Cancel</Toolbar.Toggle>
    </Toolbar>
  );
}
`;

function Demo() {
  return (
    <Toolbar>
      <Toolbar.Toggle aria-label="Bold">
        <TextBIcon weight="bold" size="100%" />
      </Toolbar.Toggle>
      <Toolbar.Toggle aria-label="Italic">
        <TextItalicIcon weight="bold" size="100%" />
      </Toolbar.Toggle>

      <Toolbar.Divider />

      <Toolbar.Toggle autoWidth>Save</Toolbar.Toggle>
      <Toolbar.Toggle autoWidth>Cancel</Toolbar.Toggle>
    </Toolbar>
  );
}

export const autoWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

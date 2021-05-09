import React from 'react';
import { Menu, MenuItem, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu, MenuItem } from '@mantine/core';

function Demo() {
  return (
    <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
      <MenuItem>Discard changes</MenuItem>
      <MenuItem>Save draft</MenuItem>
      <MenuItem color="red">Delete</MenuItem>
    </Menu>
  );
}`;

export function MenuTransitionsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center" spacing="xs">
        <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
          <MenuItem>Discard changes</MenuItem>
          <MenuItem>Save draft</MenuItem>
          <MenuItem color="red">Delete</MenuItem>
        </Menu>
      </ElementsGroup>
    </CodeDemo>
  );
}

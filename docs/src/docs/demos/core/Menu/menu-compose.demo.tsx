import React from 'react';
import { Menu, MenuItem, ElementsGroup, Button } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu, MenuItem, ElementsGroup, Button  } from '@mantine/core';

function Demo() {
  return (
    <ElementsGroup position="center" spacing="xs">
      <Button>Save</Button>

      <Menu>
        <MenuItem>Discard changes</MenuItem>
        <MenuItem>Save draft</MenuItem>
        <MenuItem color="red">Delete</MenuItem>
      </Menu>
    </ElementsGroup>
  );
}`;

export function MenuComposeDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center" spacing="xs">
        <Button>Save</Button>

        <Menu>
          <MenuItem>Discard changes</MenuItem>
          <MenuItem>Save draft</MenuItem>
          <MenuItem color="red">Delete</MenuItem>
        </Menu>
      </ElementsGroup>
    </CodeDemo>
  );
}

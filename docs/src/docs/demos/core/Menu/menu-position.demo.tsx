import React from 'react';
import { Menu, MenuItem, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Menu, MenuItem, ElementsGroup, Button  } from '@mantine/core';

function Demo() {
  return (
    <Menu menuPosition={{ bottom: 0, right: 0 }} transition="skew-down">
      <MenuItem>Discard changes</MenuItem>
      <MenuItem>Save draft</MenuItem>
      <MenuItem color="red">Delete</MenuItem>
    </Menu>
  );
}`;

export function MenuPositionDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center" spacing="xs">
        <Menu menuPosition={{ bottom: 0, right: 0 }} transition="skew-down">
          <MenuItem>Discard changes</MenuItem>
          <MenuItem>Save draft</MenuItem>
          <MenuItem color="red">Delete</MenuItem>
        </Menu>
      </ElementsGroup>
    </CodeDemo>
  );
}

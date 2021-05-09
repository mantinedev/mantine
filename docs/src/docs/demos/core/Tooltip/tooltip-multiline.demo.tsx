import React from 'react';
import { Tooltip, Button, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip
      wrapLines
      width={220}
      withArrow
      transition="fade"
      transitionDuration={200}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button variant="outline">Multiline tooltip</Button>
    </Tooltip>
  );
}`;

export function TooltipMultilineDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" style={{ paddingTop: 100 }}>
        <Tooltip
          data-mantine-composable
          wrapLines
          width={220}
          withArrow
          transition="fade"
          transitionDuration={200}
          label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
        >
          <Button variant="outline">Multiline tooltip</Button>
        </Tooltip>
      </Group>
    </CodeDemo>
  );
}

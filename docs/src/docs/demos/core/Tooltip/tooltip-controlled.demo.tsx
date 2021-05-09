import React, { useState } from 'react';
import { Tooltip, Button, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip data-mantine-composable label="Ctrl + J" opened={opened}>
      <Button variant="outline" onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`;

export function TooltipControlledDemo() {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" style={{ paddingTop: 30 }}>
        <Tooltip data-mantine-composable label="Ctrl + J" opened={opened}>
          <Button variant="outline" onClick={() => setOpened((o) => !o)}>
            Toggle color scheme
          </Button>
        </Tooltip>
      </Group>
    </CodeDemo>
  );
}

import React, { useState } from 'react';
import { Popover, Button, Group, Text, Image, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      bodyStyle={{ width: 200 }}
      position="bottom"
      withArrow
    >
      <div style={{ display: 'flex' }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          style={{ minWidth: 30, marginRight: 15 }}
        />
        <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
      </div>
    </Popover>
  );
}`;

export function PopoverBaseDemo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]}
    >
      <Group position="center" style={{ paddingBottom: 95 }}>
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
          bodyStyle={{ width: 260 }}
          position="bottom"
          withArrow
        >
          <div style={{ display: 'flex' }}>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg"
              width={30}
              height={30}
              style={{ minWidth: 30, marginRight: 15 }}
            />
            <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
          </div>
        </Popover>
      </Group>
    </CodeDemo>
  );
}

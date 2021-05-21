import React, { useState } from 'react';
import { Burger, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Burger } from '@mantine/core';

function Demo() {
  const [navigationOpened, setNavigationOpened] = useState(false);
  const title = navigationOpened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      opened={navigationOpened}
      onClick={() => setNavigationOpened((o) => !o)}
      title={title}
      aria-label={title}
    />
  );
}`;

export function BurgerBaseDemo() {
  const [navigationOpened, setNavigationOpened] = useState(false);
  const title = navigationOpened ? 'Close navigation' : 'Open navigation';

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Burger
          opened={navigationOpened}
          onClick={() => setNavigationOpened((o) => !o)}
          title={title}
          aria-label={title}
        />
      </Group>
    </CodeDemo>
  );
}

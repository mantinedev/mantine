import React, { useState } from 'react';
import { Burger, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Burger } from '@mantine/core';

export function BurgerDemo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Open navigation' : 'Close navigation';

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
      aria-label={title}
    />
  );
}`;

export function BurgerBaseDemo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Open navigation' : 'Close navigation';
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          aria-label={title}
        />
      </ElementsGroup>
    </CodeDemo>
  );
}

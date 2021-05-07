import React, { useState } from 'react';
import { useScrollLock } from '@mantine/hooks';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { ElementsGroup, Button } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';

export function Demo() {
  const [lockScroll, setLockScroll] = useState(false);
  useScrollLock(lockScroll);
  
  return (
    <Button
      onClick={() => setLockScroll((c) => !c)}
      variant="outline"
      leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
    >
      {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
    </Button>
  );
}`;

export function UseScrollLockDemo() {
  const [lockScroll, setLockScroll] = useState(false);
  useScrollLock(lockScroll);

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button
          onClick={() => setLockScroll((c) => !c)}
          variant="outline"
          leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
        >
          {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}

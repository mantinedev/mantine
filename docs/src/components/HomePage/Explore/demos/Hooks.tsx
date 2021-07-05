import React, { useState } from 'react';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import { Title, Button, Paper, Center } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { LinkTitle } from './LinkTitle';

const lockCode = `
import { useState } from 'react';
import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [lockScroll, setLockScroll] = useState(false);
  useScrollLock(lockScroll);
  const label = lockScroll ? 'Unlock scroll' : 'Lock scroll';
  return <Button onClick={() => setLockScroll((c) => !c)}>{label}</Button>;
}
`.trim();

const clickOutsideCode = `
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      {opened && <Paper elementRef={ref} shadow="sm">Click outside to close</Paper>}
    </>
  );
}
`.trim();

export function HooksDemo() {
  const [lockScroll, setLockScroll] = useState(false);
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  useScrollLock(lockScroll);

  return (
    <>
      <LinkTitle
        title="Hooks library"
        link="/hooks/getting-started/"
        description="All hooks that are used to build Mantine components are exported from @mantine/hooks package, hooks do not depend on components packages, you can use them independently in any react application"
      />

      <Title order={4}>use-scroll-lock hook</Title>

      <Button
        onClick={() => setLockScroll((c) => !c)}
        variant="outline"
        leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
        style={{ marginTop: 10, marginBottom: 15 }}
      >
        {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
      </Button>

      <Prism language="tsx" noCopy>
        {lockCode}
      </Prism>

      <Title order={4} style={{ marginTop: 15 }}>
        use-click-outside hook
      </Title>

      <div
        style={{ position: 'relative', display: 'inline-block', marginTop: 10, marginBottom: 15 }}
      >
        <Button onClick={() => setOpened(true)} variant="outline">
          Open dropdown
        </Button>

        {opened && (
          <Paper
            elementRef={ref}
            shadow="sm"
            style={{ position: 'absolute', top: -15, left: -15, right: -15, bottom: -15 }}
          >
            <Center style={{ height: '100%' }}>Click outside to close</Center>
          </Paper>
        )}
      </div>

      <Prism language="tsx" noCopy>
        {clickOutsideCode}
      </Prism>
    </>
  );
}

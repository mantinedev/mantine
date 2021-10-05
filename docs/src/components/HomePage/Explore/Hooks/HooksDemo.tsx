import React, { useState } from 'react';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import { Title, Button, Paper, Center, createStyles } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 30,
      paddingBottom: 30,
      boxShadow: theme.shadows.md,
    },
  },
}));

const lockCode = `
import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [lockScroll, setLockScroll] = useScrollLock();
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
      {opened && <Paper ref={ref} shadow="sm">Click outside to close</Paper>}
    </>
  );
}
`.trim();

export function HooksDemo() {
  const { classes } = useStyles();
  const [lockScroll, setLockScroll] = useScrollLock();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Title order={4}>use-scroll-lock hook</Title>

      <Button
        onClick={() => setLockScroll((c) => !c)}
        variant="outline"
        leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
        style={{ marginTop: 10, marginBottom: 15 }}
      >
        {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
      </Button>

      <Prism language="tsx" noCopy className={classes.prism}>
        {lockCode}
      </Prism>

      <Title order={4} mt={30}>
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
            ref={ref}
            shadow="md"
            style={{
              position: 'absolute',
              top: -15,
              left: -15,
              right: -15,
              bottom: -15,
              zIndex: 3,
            }}
          >
            <Center style={{ height: '100%' }}>Click outside to close</Center>
          </Paper>
        )}
      </div>

      <Prism language="tsx" noCopy className={classes.prism}>
        {clickOutsideCode}
      </Prism>
    </>
  );
}

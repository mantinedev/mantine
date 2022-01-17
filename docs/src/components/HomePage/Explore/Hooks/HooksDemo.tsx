import React, { useState } from 'react';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import { Title, Button, Paper, Center, createStyles, useMantineTheme } from '@mantine/core';
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
    },

    '& .mantine-ScrollArea-viewport': {
      borderRadius: theme.radius.md,
    },

    '& .mantine-ScrollArea-root': {
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    },
  },
}));

const lockCode = `
import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const label = scrollLocked ? 'Unlock scroll' : 'Lock scroll';
  return <Button onClick={() => setScrollLocked((c) => !c)}>{label}</Button>;
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
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  const theme = useMantineTheme();

  return (
    <>
      <Title order={4}>use-scroll-lock hook</Title>

      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
        style={{ marginTop: 10, marginBottom: 15 }}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
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
            padding="xl"
            style={{
              position: 'absolute',
              top: -15,
              left: -15,
              right: -15,
              bottom: -15,
              zIndex: 3,
              fontSize: 12,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
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

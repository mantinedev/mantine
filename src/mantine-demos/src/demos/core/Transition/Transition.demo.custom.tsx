import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Transition, Paper, Button, useMantineTheme, rem } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Transition, Paper, Button, rem } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        maxWidth: rem(200),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            style={{ ...styles, position: 'absolute', top: 0, left: 0, right: 0, height: rem(120) }}
            ref={clickOutsideRef}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}`;

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

export function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));
  const theme = useMantineTheme();

  return (
    <div
      style={{
        maxWidth: rem(200),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(styles) => (
          <Paper
            shadow="md"
            ref={clickOutsideRef}
            style={{
              ...styles,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: rem(120),
              padding: theme.spacing.xl,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}

export const custom: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

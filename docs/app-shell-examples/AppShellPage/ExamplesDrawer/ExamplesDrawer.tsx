import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDisclosure } from '@mantine/hooks';
import { Button, Affix, Drawer, Group, rem, UnstyledButton, Text, ScrollArea } from '@mantine/core';
import { IconMenu2, IconArrowLeft, IconCode, IconLayoutBoard } from '@tabler/icons-react';
import { APP_SHELL_EXAMPLES_DATA } from '../../app-shell-examples-data';
import classes from './ExamplesDrawer.module.css';

export function ExamplesDrawer() {
  const [opened, { open, close }] = useDisclosure();
  const router = useRouter();
  const currentExample = router.query.e as string;
  const currentState = router.query.s === 'code' ? 'code' : 'demo';
  const StateIcon = currentState === 'code' ? IconLayoutBoard : IconCode;

  const examples = APP_SHELL_EXAMPLES_DATA.map((example) => (
    <UnstyledButton
      component={Link}
      href={`/app-shell?e=${example.id}`}
      key={example.id}
      mod={{ active: router.query.e === example.id }}
      className={classes.control}
      onClick={close}
    >
      <Text span className={classes.name}>
        {example.name}
      </Text>
      <Text span className={classes.description}>
        {example.description}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <Affix zIndex={1000}>
        <Group p="xl">
          <Button
            component={Link}
            href="/core/app-shell"
            variant="default"
            size="md"
            leftSection={
              <IconArrowLeft
                className="mantine-rotate-rtl"
                style={{ width: rem(20), height: rem(20) }}
              />
            }
            style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
            radius="xl"
          >
            Back to documentation
          </Button>

          <Button
            component={Link}
            href={`/app-shell?e=${currentExample}&s=${currentState === 'code' ? 'demo' : 'code'}`}
            variant="default"
            size="md"
            w={160}
            leftSection={<StateIcon style={{ width: rem(20), height: rem(20) }} />}
            style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
            radius="xl"
          >
            View {currentState === 'code' ? 'demo' : 'code'}
          </Button>

          <Button
            onClick={open}
            size="md"
            radius="xl"
            leftSection={<IconMenu2 style={{ width: rem(20), height: rem(20) }} />}
            w="var(--button-height)"
            style={{ boxShadow: 'var(--mantine-shadow-sm)' }}
            aria-label="Other examples"
            className={classes.menuButton}
          />
        </Group>
      </Affix>

      <Drawer
        opened={opened}
        onClose={close}
        zIndex={2000}
        position="right"
        withCloseButton={false}
        padding={0}
      >
        <ScrollArea h="100dvh" type="hover" p="md">
          {examples}
        </ScrollArea>
      </Drawer>
    </>
  );
}

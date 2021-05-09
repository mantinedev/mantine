import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Text, Button, Group } from '@mantine/core';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { useScrollLock } from './use-scroll-lock';

const lorem =
  'Because and pointing threw system for read. That or spot. What stairs nor perfected lead to buttons to here. The in there I attention would left right look such may through they the seven. People, into probably must suppliers, something phase by the every there up rendering it logged although.';

function Example() {
  const [lockScroll, setLockScroll] = useState(false);
  const items = Array(10)
    .fill(0)
    .map((_, index) => (
      <Text component="p" key={index}>
        {lorem}
      </Text>
    ));

  useScrollLock(lockScroll);

  return (
    <Container size="xs" style={{ padding: 20 }}>
      {items}
      <Group position="center">
        <Button
          onClick={() => setLockScroll((c) => !c)}
          variant="outline"
          leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
        >
          {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
        </Button>
      </Group>
      {items}
    </Container>
  );
}

storiesOf('@mantine/hooks/use-scroll-lock', module).add('Usage', () => <Example />);

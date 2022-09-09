import React, { useState } from 'react';
import { Avatar, Indicator, Box, Button } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';

const code = `
import { useState } from 'react';
import { Avatar, Indicator, Box, Button } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';

function Demo() {
  const [demoValue, setDemoValue] = useState(9);
  return (
    <Box
      sx={() => ({
        display: 'flex',
        gap: 48,
        alignItems: 'center',
      })}
    >
      <Box
        sx={() => ({
          display: 'flex',
          gap: 48,
        })}
      >
        <Indicator label={demoValue} showZero inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
        <Indicator label={demoValue} overflowCount={10} inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
        <Indicator label={demoValue} showZero overflowCount={999} inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
      </Box>

      <Button.Group>
        <Button variant="outline" onClick={() => setDemoValue((old) => old + 1)}>
          <IconPlus />
        </Button>
        <Button variant="outline" onClick={() => setDemoValue((old) => old - 1)}>
          <IconMinus />
        </Button>
      </Button.Group>
    </Box>
  );
}
`;

function Demo() {
  const [demoValue, setDemoValue] = useState(9);
  return (
    <Box
      sx={() => ({
        display: 'flex',
        gap: 48,
        alignItems: 'center',
      })}
    >
      <Box
        sx={() => ({
          display: 'flex',
          gap: 48,
        })}
      >
        <Indicator label={demoValue} showZero inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
        <Indicator label={demoValue} overflowCount={10} inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
        <Indicator label={demoValue} showZero overflowCount={999} inline size={16}>
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
        </Indicator>
      </Box>

      <Button.Group>
        <Button variant="outline" onClick={() => setDemoValue((old) => old + 1)}>
          <IconPlus />
        </Button>
        <Button variant="outline" onClick={() => setDemoValue((old) => old - 1)}>
          <IconMinus />
        </Button>
      </Button.Group>
    </Box>
  );
}

export const overflowCount: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

import React from 'react';
import { useFullscreen } from '@mantine/hooks';
import { Button, Center, Image, Paper, Text, useMantineTheme } from '@mantine/core';

const code = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Center, Paper, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Paper>
      <Center>
        <Button
          onClick={toggle}
          style={{
            backgroundColor: fullscreen ? theme.colors.orange[9] : theme.colors.green[9],
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          </Text>
        </Button>
      </Center>
    </Paper>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Paper>
      <Center>
        <Button
          onClick={toggle}
          style={{
            backgroundColor: fullscreen ? theme.colors.orange[9] : theme.colors.green[9],
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          </Text>
        </Button>
      </Center>
    </Paper>
  );
}

const refCode = `
import { useFullscreen } from '@mantine/hooks';
import { Button, Image, Paper, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Paper>
      <Image
        elementRef={ref}
        src="https://images.unsplash.com/long-url"
        alt="Unsplash Image to make Fullscreen"
      />
      <Button
        onClick={toggle}
        style={{
          backgroundColor: fullscreen ? theme.colors.orange[9] : theme.colors.green[9],
        }}
      >
        <Text style={{ color: theme.white }} weight={700}>
          {fullscreen ? 'Exit Fullscreen' : 'Make Image Fullscreen'}
        </Text>
      </Button>
    </Paper>
  );
}
`;

function RefDemo() {
  const theme = useMantineTheme();
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <Paper>
      <Image
        elementRef={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Unsplash Image to make Fullscreen"
      />
      <Button
        onClick={toggle}
        style={{
          backgroundColor: fullscreen ? theme.colors.orange[9] : theme.colors.green[9],
        }}
      >
        <Text style={{ color: theme.white }} weight={700}>
          {fullscreen ? 'Exit Fullscreen' : 'Make Image Fullscreen'}
        </Text>
      </Button>
    </Paper>
  );
}

export const useFullscreenDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

export const useFullscreenRefDemo: MantineDemo = {
  type: 'demo',
  code: refCode,
  component: RefDemo,
};

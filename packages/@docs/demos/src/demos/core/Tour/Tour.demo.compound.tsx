import { useState } from 'react';
import { Badge, Button, Group, Stack, Text, ThemeIcon, Tour } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Badge, Button, Group, Stack, Text, ThemeIcon, Tour } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button id="compound-1" onClick={() => { setActive(true); setStep(0); }}>
          Start tour
        </Button>
        <Button id="compound-2" variant="light">
          Settings
        </Button>
      </Group>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
      >
        <Tour.Step target="#compound-1" title="Welcome">
          <Stack gap="xs">
            <Group gap="xs">
              <Badge color="teal" size="sm">New</Badge>
              <Badge color="blue" size="sm">v9.7</Badge>
            </Group>
            <Text size="sm">
              Welcome to the app! This tour will guide you through the key features.
            </Text>
          </Stack>
        </Tour.Step>
        <Tour.Step target="#compound-2" title="Settings">
          <Group gap="sm" align="flex-start">
            <ThemeIcon variant="light" size="lg">⚙</ThemeIcon>
            <Text size="sm" style={{ flex: 1 }}>
              Configure your preferences and manage your account settings here.
            </Text>
          </Group>
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Group>
        <Button
          id="compound-1"
          onClick={() => {
            setActive(true);
            setStep(0);
          }}
        >
          Start tour
        </Button>
        <Button id="compound-2" variant="light">
          Settings
        </Button>
      </Group>

      <Tour active={active} step={step} onStepChange={setStep} onClose={() => setActive(false)}>
        <Tour.Step target="#compound-1" title="Welcome">
          <Stack gap="xs">
            <Group gap="xs">
              <Badge color="teal" size="sm">
                New
              </Badge>
              <Badge color="blue" size="sm">
                v9.7
              </Badge>
            </Group>
            <Text size="sm">
              Welcome to the app! This tour will guide you through the key features.
            </Text>
          </Stack>
        </Tour.Step>
        <Tour.Step target="#compound-2" title="Settings">
          <Group gap="sm" align="flex-start">
            <ThemeIcon variant="light" size="lg">
              ⚙
            </ThemeIcon>
            <Text size="sm" style={{ flex: 1 }}>
              Configure your preferences and manage your account settings here.
            </Text>
          </Group>
        </Tour.Step>
      </Tour>
    </>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

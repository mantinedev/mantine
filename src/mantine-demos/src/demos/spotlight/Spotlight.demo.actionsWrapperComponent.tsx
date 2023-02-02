import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Group, Text, Anchor, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@mantine/spotlight';
import { Group, Text, Anchor, rem } from '@mantine/core';

function ActionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Group
        position="apart"
        px={15}
        py="xs"
        sx={(theme) => ({
          borderTop: \`\${rem(1)} solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }\`,
        })}
      >
        <Text size="xs" color="dimmed">
          Search powered by Mantine
        </Text>
        <Anchor size="xs" href="#">
          Learn more
        </Anchor>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + T"
      nothingFoundMessage="Nothing found..."
      actionsWrapperComponent={ActionsWrapper}
      {...otherProps}
    >
      <App />
    </SpotlightProvider>
  );
}
`;

function ActionsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Group
        position="apart"
        px={15}
        py="xs"
        sx={(theme) => ({
          borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
        })}
      >
        <Text size="xs" color="dimmed">
          Search powered by Mantine
        </Text>
        <Anchor size="xs" href="#">
          Learn more
        </Anchor>
      </Group>
    </div>
  );
}

function Demo() {
  return (
    <Wrapper
      actionsWrapperComponent={ActionsWrapper}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + T"
      buttonLabel="Open spotlight"
      nothingFoundMessage="Nothing found..."
    />
  );
}

export const actionsWrapperComponent: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

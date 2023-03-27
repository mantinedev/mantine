import React, { useState } from 'react';
import { IconPackage } from '@tabler/icons-react';
import { MantineProvider } from '@mantine/styles';
import { Tabs, TabsProps } from './Tabs';
import { Badge } from '../Badge';
import { Box } from '../Box';
import { Button } from '../Button';

export default {
  title: 'Tabs',
};

const base = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react" pr="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pr="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pr="sm">
      Angular Panel
    </Tabs.Panel>
  </>
);

const verticalBase = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react" pl="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pl="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pl="sm">
      Angular Panel
    </Tabs.Panel>
  </>
);

const Wrapper = (props: TabsProps) => <Tabs sx={{ maxWidth: 500 }} mx="auto" mt={40} {...props} />;

export const NoLoop = () => (
  <Wrapper defaultValue="react" loop={false}>
    {base}
  </Wrapper>
);

export const NoKeyboardActivation = () => (
  <Wrapper defaultValue="react" activateTabWithKeyboard={false}>
    {base}
  </Wrapper>
);

export const NoDefaultValue = () => <Wrapper defaultValue={null}>{base}</Wrapper>;

export const AllowDeactivation = () => (
  <Wrapper defaultValue="react" allowTabDeactivation>
    {base}
  </Wrapper>
);

export const Controlled = () => {
  const [tab, setTab] = useState('react');
  return (
    <Wrapper value={tab} onTabChange={setTab} allowTabDeactivation>
      {base}
    </Wrapper>
  );
};

export const Grow = () => (
  <Wrapper defaultValue="react">
    <Tabs.List grow>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react">React Panel</Tabs.Panel>
    <Tabs.Panel value="sv">Svelte Panel</Tabs.Panel>
    <Tabs.Panel value="ng">Angular Panel</Tabs.Panel>
  </Wrapper>
);

export const Variants = () => (
  <Box sx={{ maxWidth: 400 }} mx="auto" mt={40}>
    <Wrapper defaultValue="react" variant="default" mt={10} mb={50} radius="md">
      {base}
    </Wrapper>

    <Wrapper defaultValue="react" variant="outline" mt={10} mb={50} radius="md">
      {base}
    </Wrapper>

    <Wrapper defaultValue="react" variant="pills" mt={10} radius="md">
      {base}
    </Wrapper>
  </Box>
);

export const VerticalVariants = () => (
  <Box sx={{ maxWidth: 400 }} mx="auto" mt={40}>
    <Wrapper
      defaultValue="react"
      orientation="vertical"
      variant="default"
      mt={10}
      mb={50}
      radius="md"
    >
      {verticalBase}
    </Wrapper>

    <Wrapper
      defaultValue="react"
      orientation="vertical"
      variant="outline"
      mt={10}
      mb={50}
      radius="md"
    >
      {verticalBase}
    </Wrapper>

    <Wrapper defaultValue="react" orientation="vertical" variant="pills" mt={10} radius="md">
      {verticalBase}
    </Wrapper>
  </Box>
);

export const VerticalPlacement = () => (
  <Box sx={{ maxWidth: 400 }} mx="auto" mt={40}>
    <Wrapper
      defaultValue="react"
      orientation="vertical"
      variant="default"
      mt={10}
      mb={50}
      radius="md"
      placement="right"
    >
      {verticalBase}
    </Wrapper>

    <Wrapper
      defaultValue="react"
      orientation="vertical"
      variant="outline"
      mt={10}
      mb={50}
      radius="md"
      placement="right"
    >
      {verticalBase}
    </Wrapper>

    <Wrapper
      defaultValue="react"
      orientation="vertical"
      variant="pills"
      mt={10}
      radius="md"
      placement="right"
    >
      {verticalBase}
    </Wrapper>
  </Box>
);

export const WithIcon = () => (
  <Wrapper defaultValue="react" variant="outline">
    <Tabs.List>
      <Tabs.Tab value="react" icon={<IconPackage size={14} />} />
      <Tabs.Tab
        value="sv"
        rightSection={
          <Badge size="xs" sx={{ width: 16, height: 16, padding: 0 }}>
            6
          </Badge>
        }
      >
        Svelte
      </Tabs.Tab>
      <Tabs.Tab value="ng">Angular</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react" pt="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pt="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pt="sm">
      Angular Panel
    </Tabs.Panel>
  </Wrapper>
);

export const Unstyled = () => (
  <Wrapper defaultValue="react" unstyled>
    {base}
  </Wrapper>
);

export const StylesApi = () => (
  <Wrapper
    defaultValue="react"
    unstyled
    styles={(theme) => ({
      tab: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
        }`,
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        cursor: 'pointer',
        fontSize: theme.fontSizes.sm,

        '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },

        '&:not(:first-of-type)': {
          borderLeft: 0,
        },

        '&:first-of-type': {
          borderTopLeftRadius: theme.radius.md,
          borderBottomLeftRadius: theme.radius.md,
        },

        '&:last-of-type': {
          borderTopRightRadius: theme.radius.md,
          borderBottomRightRadius: theme.radius.md,
        },
      },

      tabActive: {
        backgroundColor: theme.colors.blue[7],
        borderColor: theme.colors.blue[7],
        color: theme.white,
      },
    })}
  >
    {base}
  </Wrapper>
);

export const StylesApiOnProvider = () => (
  <MantineProvider
    theme={{
      components: {
        Tabs: {
          defaultProps: { unstyled: true },
          styles: (theme) => ({
            tab: {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
              border: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]
              }`,
              padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
              cursor: 'pointer',
              fontSize: theme.fontSizes.sm,

              '&[data-active]': {
                backgroundColor: theme.colors.blue[7],
                borderColor: theme.colors.blue[7],
                color: theme.white,
              },

              '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed',
              },

              '&:not(:first-of-type)': {
                borderLeft: 0,
              },

              '&:first-of-type': {
                borderTopLeftRadius: theme.radius.md,
                borderBottomLeftRadius: theme.radius.md,
              },

              '&:last-of-type': {
                borderTopRightRadius: theme.radius.md,
                borderBottomRightRadius: theme.radius.md,
              },
            },
          }),
        },
      },
    }}
  >
    <Wrapper defaultValue="react">{base}</Wrapper>
  </MantineProvider>
);

export const DynamicTabs = () => {
  const [count, setCount] = useState(1);
  const list = Array(count)
    .fill(0)
    .map((_, index) => index.toString());
  const tabs = list.map((item) => <Tabs.Tab value={item}>Tab {item}</Tabs.Tab>);
  const panels = list.map((item) => <Tabs.Panel value={item}>Panel {item}</Tabs.Panel>);

  return (
    <Tabs>
      <Tabs.List>{tabs}</Tabs.List>
      {panels}
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <Button onClick={() => setCount(count - 1)}>Remove</Button>
    </Tabs>
  );
};

export const Inverted = () => (
  <Wrapper defaultValue="react" variant="outline" inverted>
    <Tabs.Panel value="react" pb="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pb="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pb="sm">
      Angular Panel
    </Tabs.Panel>

    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>
  </Wrapper>
);

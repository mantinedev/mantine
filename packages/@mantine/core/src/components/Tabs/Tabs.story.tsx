import { useState } from 'react';
import { IconPackage } from '@tabler/icons-react';
import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Tabs',
};

const base = (
  <>
    <Tabs.List>
      <Tabs.Tab
        value="react"
        leftSection={<IconPackage size={16} />}
        rightSection={<IconPackage size={16} />}
      >
        React
      </Tabs.Tab>
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

    <Tabs.Panel value="react" pl="sm" bg="red.0">
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

const Wrapper = (props: TabsProps) => <Tabs maw={500} mx="auto" mt={40} {...props} />;

export function DefaultVariant() {
  return (
    <div>
      <Wrapper defaultValue="react">{base}</Wrapper>

      <Wrapper defaultValue="react" inverted>
        {base}
      </Wrapper>

      <Wrapper color="orange" defaultValue="react" orientation="vertical">
        {base}
      </Wrapper>

      <Wrapper color="orange" defaultValue="react" orientation="vertical" placement="right">
        {base}
      </Wrapper>
    </div>
  );
}

export function OutlineVariant() {
  return (
    <div>
      <Wrapper variant="outline" defaultValue="react">
        {base}
      </Wrapper>

      <Wrapper variant="outline" defaultValue="react" inverted>
        {base}
      </Wrapper>

      <Wrapper variant="outline" defaultValue="react" orientation="vertical">
        {base}
      </Wrapper>

      <Wrapper variant="outline" defaultValue="react" orientation="vertical" placement="right">
        {base}
      </Wrapper>
    </div>
  );
}

export function PillsVariant() {
  return (
    <div>
      <Wrapper variant="pills" color="lime.4" defaultValue="react" autoContrast>
        {base}
      </Wrapper>

      <Wrapper variant="pills" color="green.9" defaultValue="react" inverted>
        {base}
      </Wrapper>

      <Wrapper variant="pills" color="green.9" defaultValue="react" orientation="vertical">
        {base}
      </Wrapper>

      <Wrapper
        variant="pills"
        color="green.9"
        defaultValue="react"
        orientation="vertical"
        placement="right"
      >
        {base}
      </Wrapper>
    </div>
  );
}

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
  const [tab, setTab] = useState<string | null>('react');
  return (
    <Wrapper value={tab} onChange={setTab} allowTabDeactivation>
      {base}
    </Wrapper>
  );
};

export const Grow = () => (
  <Wrapper defaultValue="react">
    <Tabs.List grow>
      <Tabs.Tab value="react" color="red">
        React
      </Tabs.Tab>
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
  <div style={{ maxWidth: 500, padding: 40 }}>
    <Wrapper defaultValue="react" variant="default" mt={10} mb={50} radius="md">
      {base}
    </Wrapper>

    <Wrapper defaultValue="react" variant="outline" mt={10} mb={50} radius="md">
      {base}
    </Wrapper>

    <Wrapper defaultValue="react" variant="pills" mt={10} radius="md">
      {base}
    </Wrapper>
  </div>
);

export const VerticalVariants = () => (
  <div style={{ maxWidth: 600, padding: 40 }}>
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
  </div>
);

export const VerticalPlacement = () => (
  <div style={{ maxWidth: 500, padding: 40 }}>
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
  </div>
);

export const WithIcon = () => (
  <Wrapper defaultValue="react" variant="outline">
    <Tabs.List>
      <Tabs.Tab value="react" leftSection={<IconPackage size={14} />} />
      <Tabs.Tab value="sv" rightSection={<span>right</span>}>
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

export const DynamicTabs = () => {
  const [count, setCount] = useState(1);
  const list = Array(count)
    .fill(0)
    .map((_, index) => index.toString());
  const tabs = list.map((item) => (
    <Tabs.Tab value={item} key={item}>
      Tab {item}
    </Tabs.Tab>
  ));
  const panels = list.map((item) => (
    <Tabs.Panel value={item} key={item}>
      Panel {item}
    </Tabs.Panel>
  ));

  return (
    <Tabs>
      <Tabs.List>{tabs}</Tabs.List>
      {panels}
      <button type="button" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Remove
      </button>
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

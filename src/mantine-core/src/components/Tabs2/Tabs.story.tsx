import React, { useState } from 'react';
import { Tabs, TabsProps } from './Tabs';
import { Box } from '../Box';

export default {
  title: 'Tabs2',
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

    <Tabs.Panel value="react" pt="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pt="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pt="sm">
      Angular Panel
    </Tabs.Panel>
  </>
);

const Wrapper = (props: TabsProps) => <Tabs sx={{ maxWidth: 500 }} mx="auto" mt={40} {...props} />;

export const Usage = () => <Wrapper defaultValue="react">{base}</Wrapper>;

export const NoLoop = () => (
  <Wrapper defaultValue="react" loop={false}>
    {base}
  </Wrapper>
);

export const NoKeyboardActivation = () => (
  <Wrapper defaultValue="react" activateTabWithKeyboardEvents={false}>
    {base}
  </Wrapper>
);

export const VerticalOrientation = () => (
  <Wrapper defaultValue="react" orientation="vertical">
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
    Default:
    <Wrapper defaultValue="react" variant="default" mt={10} mb={50}>
      {base}
    </Wrapper>
    Outline:
    <Wrapper defaultValue="react" variant="outline" mt={10}>
      {base}
    </Wrapper>
  </Box>
);

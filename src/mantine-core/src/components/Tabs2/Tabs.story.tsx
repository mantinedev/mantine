import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs2',
};

const base = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react">React Panel</Tabs.Panel>
    <Tabs.Panel value="sv">Svelte Panel</Tabs.Panel>
    <Tabs.Panel value="ng">Angular Panel</Tabs.Panel>
  </>
);

export const Usage = () => <Tabs defaultValue="react">{base}</Tabs>;

export const NoLoop = () => (
  <Tabs defaultValue="react" loop={false}>
    {base}
  </Tabs>
);

export const NoKeyboardActivation = () => (
  <Tabs defaultValue="react" activateTabWithKeyboardEvents={false}>
    {base}
  </Tabs>
);

import React from 'react';
import { Tabs } from './Tabs';

export default {
  title: 'Tabs2',
};

export const Usage = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Angular</Tabs.Tab>
    </Tabs.List>
  </Tabs>
);

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from './index';

function Controlled() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

function Dynamic() {
  const [tabs, setTabs] = useState([1, 2, 3, 4]);
  const increment = () => setTabs((current) => [...current, current[current.length - 1] + 1]);
  const children = tabs.map((tab) => <Tab key={tab} label={`tab ${tab}`} />);

  return (
    <div>
      <Tabs>{children}</Tabs>
      <button type="button" onClick={increment}>
        increment
      </button>
    </div>
  );
}

storiesOf('@mantine/core/Tabs/stories', module)
  .add('Dynamic children', () => <Dynamic />)
  .add('Controlled', () => <Controlled />)
  .add('Disabled', () => (
    <div style={{ padding: 50 }}>
      <Tabs style={{ marginTop: 20 }}>
        <Tab label="First Disabled" disabled />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>

      <Tabs style={{ marginTop: 20 }}>
        <Tab label="Multiple disabled" />
        <Tab label="2" disabled />
        <Tab label="3" disabled />
        <Tab label="4" />
        <Tab label="5" />
        <Tab label="5" disabled />
        <Tab label="6a" disabled />
        <Tab label="6b" disabled />
        <Tab label="6c" />
        <Tab label="7" disabled />
        <Tab label="8" />
      </Tabs>
    </div>
  ));

import React from 'react';
import { InputIcon, StackIcon, DashboardIcon } from '@modulz/radix-icons';
import { Tabs, Tab } from '@mantine/core';
import { InputsDemo } from './InputsDemo';
import { ContentDemos } from './ContentDemos';
import { OverlaysDemos } from './OverlaysDemos';

export function CoreDemo() {
  const tabStyle = { fontSize: 18, marginLeft: 5 };
  const iconStyles = { width: 16, height: 16 };
  return (
    <div style={{ marginTop: -14 }}>
      <Tabs grow variant="pills" styles={{ body: { paddingTop: 20 } }}>
        <Tab label="Inputs" icon={<InputIcon style={iconStyles} />} styles={{ label: tabStyle }}>
          <InputsDemo />
        </Tab>
        <Tab label="Overlays" icon={<StackIcon style={iconStyles} />} styles={{ label: tabStyle }}>
          <OverlaysDemos />
        </Tab>
        <Tab
          label="Content"
          icon={<DashboardIcon style={iconStyles} />}
          styles={{ label: tabStyle }}
        >
          <ContentDemos />
        </Tab>
      </Tabs>
    </div>
  );
}

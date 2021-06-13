import React from 'react';
import { InputIcon, StackIcon, DashboardIcon, LetterCaseCapitalizeIcon } from '@modulz/radix-icons';
import { Tabs, Tab } from '@mantine/core';

export function CoreDemo() {
  const tabStyle = { fontSize: 18, marginLeft: 5 };
  const iconStyles = { width: 16, height: 16 };
  return (
    <div style={{ marginTop: -14 }}>
      <Tabs grow variant="pills">
        <Tab label="Inputs" icon={<InputIcon style={iconStyles} />} styles={{ label: tabStyle }}>
          Inputs
        </Tab>
        <Tab label="Overlay" icon={<StackIcon style={iconStyles} />} styles={{ label: tabStyle }}>
          overlays
        </Tab>
        <Tab
          label="Data display"
          icon={<DashboardIcon style={iconStyles} />}
          styles={{ label: tabStyle }}
        >
          data display
        </Tab>
        <Tab
          label="Typography"
          icon={<LetterCaseCapitalizeIcon style={iconStyles} />}
          styles={{ label: tabStyle }}
        >
          typography
        </Tab>
      </Tabs>
    </div>
  );
}

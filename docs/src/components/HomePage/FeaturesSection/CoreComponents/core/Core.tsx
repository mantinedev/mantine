import React from 'react';
import { InputIcon, StackIcon, DashboardIcon } from '@modulz/radix-icons';
import { Tabs, Tab, useMantineTheme } from '@mantine/core';
import { InputsDemo } from './InputsDemo';
import { ContentDemos } from './ContentDemos';
import { OverlaysDemos } from './OverlaysDemos';

export function CoreDemo() {
  const tabStyle = { fontSize: 18, marginLeft: 5 };
  const iconStyles = { width: 16, height: 16 };
  const theme = useMantineTheme();
  return (
    <Tabs
      grow
      variant="pills"
      styles={{
        body: { paddingTop: 20 },
        tabActive: {
          backgroundColor: theme.colors.blue[theme.colorScheme === 'dark' ? 8 : 6],
        },
        tabControl: {
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          }`,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
      }}
    >
      <Tab label="Inputs" icon={<InputIcon style={iconStyles} />} styles={{ label: tabStyle }}>
        <InputsDemo />
      </Tab>
      <Tab label="Overlays" icon={<StackIcon style={iconStyles} />} styles={{ label: tabStyle }}>
        <OverlaysDemos />
      </Tab>
      <Tab label="Content" icon={<DashboardIcon style={iconStyles} />} styles={{ label: tabStyle }}>
        <ContentDemos />
      </Tab>
    </Tabs>
  );
}

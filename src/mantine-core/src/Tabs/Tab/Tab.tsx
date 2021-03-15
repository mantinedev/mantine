import React from 'react';

export interface TabProps {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export interface TabType {
  type: any;
  props: TabProps;
}

// Props should be kept for ts integration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Tab(props: TabProps) {
  return null;
}

Tab.displayName = '@mantine/core/Tab';

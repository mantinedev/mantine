import React from 'react';

export interface TabProps extends React.ComponentProps<'button'> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
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

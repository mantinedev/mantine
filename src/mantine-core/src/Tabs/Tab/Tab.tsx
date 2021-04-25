import React from 'react';

export interface TabProps extends React.ComponentProps<'button'> {
  /** Tab control label */
  label?: React.ReactNode;

  /** Icon on the left side of label */
  icon?: React.ReactNode;

  /** Tab content */
  children?: React.ReactNode;

  /** Get tab control ref */
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

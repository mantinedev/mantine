import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';

export interface TabProps extends DefaultProps, React.ComponentProps<'button'> {
  /** Tab control label */
  label?: React.ReactNode;

  /** Icon on the left side of label */
  icon?: React.ReactNode;

  /** Tab content */
  children?: React.ReactNode;

  /** Get tab control ref */
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

export interface TabType {
  type: any;
  props: TabProps;
  ref: React.ForwardedRef<HTMLButtonElement>;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(() => null);

Tab.displayName = '@mantine/core/Tab';

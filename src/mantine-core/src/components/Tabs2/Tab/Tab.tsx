import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { UnstyledButton } from '../../Button';
import { useTabsContext } from '../Tabs.context';

interface TabProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  value: string;
  children: React.ReactNode;
}

export function Tab({ value, children, ...others }: TabProps) {
  const ctx = useTabsContext();
  return (
    <UnstyledButton
      type="button"
      role="tab"
      id={`${ctx.id}-tab-${value}`}
      aria-selected={value === ctx.value}
      aria-controls={`${ctx.id}-panel-${value}`}
      {...others}
    >
      {children}
    </UnstyledButton>
  );
}

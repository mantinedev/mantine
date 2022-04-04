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
  const activateTab = () => ctx.onTabChange(value);

  return (
    <UnstyledButton
      type="button"
      role="tab"
      id={ctx.getTabId(value)}
      aria-selected={value === ctx.value}
      aria-controls={ctx.getPanelId(value)}
      onClick={activateTab}
      {...others}
    >
      {children}
    </UnstyledButton>
  );
}

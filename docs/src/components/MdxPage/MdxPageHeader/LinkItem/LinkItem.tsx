import React from 'react';
import { Anchor, useMantineTheme } from '@mantine/core';
import { HeaderItem } from '../HeaderItem/HeaderItem';

interface LinkItemProps {
  label: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode;
  link: string;
}

export function LinkItem({ label, icon, children, link }: LinkItemProps) {
  const theme = useMantineTheme();

  return (
    <HeaderItem label={label}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Anchor
          href={link}
          size="sm"
          style={{
            color: theme.colors.gray[9],
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
          }}
        >
          <div style={{ marginRight: 12, display: 'flex', alignItems: 'center' }}>{icon}</div>
          {children}
        </Anchor>
      </div>
    </HeaderItem>
  );
}

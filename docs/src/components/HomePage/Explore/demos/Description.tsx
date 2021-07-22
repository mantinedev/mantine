import React from 'react';
import { Text, useMantineTheme } from '@mantine/core';

interface DescriptionProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

export function Description({ children, style }: DescriptionProps) {
  const theme = useMantineTheme();

  return (
    <Text
      size="sm"
      style={{
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        maxWidth: 420,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

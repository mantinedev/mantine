import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { ColorsGroup } from './ColorsGroup';

export function ThemeColors() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((group) => (
    <ColorsGroup group={group} key={group} />
  ));

  return (
    <div style={{ marginTop: theme.spacing.md, marginBottom: theme.spacing.xl }}>{swatches}</div>
  );
}

import React from 'react';
import { ColorSwatch, Text, Title } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';

export function ThemeColors() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((colorName, colorIndex) => {
    const colors = theme.colors[colorName].map((color, index) => (
      <div
        key={color}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: `calc(25% - ${theme.spacing.xs * 2}px)`,
          minWidth: 140,
          margin: theme.spacing.xs,
        }}
      >
        <ColorSwatch color={color} radius="sm" size={50} />

        <div style={{ marginLeft: theme.spacing.xs }}>
          <Text transform="capitalize">
            {colorName} {index}
          </Text>
          <Text color="gray" size="xs" transform="uppercase" style={{ marginTop: 2 }}>
            {color}
          </Text>
        </div>
      </div>
    ));

    return (
      <div key={colorName} style={{ marginTop: colorIndex !== 0 && theme.spacing.xl * 2 }}>
        <Title
          order={4}
          style={{
            textTransform: 'capitalize',
            marginBottom: theme.spacing.xs,
          }}
        >
          {colorName}
        </Title>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: -theme.spacing.xs }}>{colors}</div>
      </div>
    );
  });

  return (
    <div style={{ marginTop: theme.spacing.md, marginBottom: theme.spacing.xl }}>{swatches}</div>
  );
}

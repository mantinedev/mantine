import React, { useState } from 'react';
import { CheckIcon } from '@primer/octicons-react';
import { BlendingModeIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, Popover, useMantineTheme } from '@mantine/core';

interface ColorControlProps {
  onChange(color: string): void;
  value: string;
}

export function ColorControl({ onChange, value }: ColorControlProps) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const colors = Object.keys(theme.colors).map((color) => ({
    swatch: theme.colors[color][6],
    color,
  }));

  const swatches = colors.map(({ color, swatch }) => (
    <ColorSwatch
      component="button"
      type="button"
      onClick={() => onChange(color)}
      key={color}
      color={swatch}
      size={22}
      style={{ color: theme.white, cursor: 'pointer' }}
    >
      {value === color && <CheckIcon size={10} />}
    </ColorSwatch>
  ));

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      transitionDuration={0}
      target={
        <ColorSwatch
          component="button"
          type="button"
          color={theme.colors[value][6]}
          onClick={() => setOpened((o) => !o)}
          size={22}
          style={{ display: 'block', cursor: 'pointer' }}
        >
          <BlendingModeIcon style={{ width: 14, height: 14, color: theme.white }} />
        </ColorSwatch>
      }
      styles={{
        root: {
          marginRight: theme.spacing.xs,
        },
        body: {
          width: 152,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
        arrow: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        },
      }}
      position="bottom"
      placement="end"
      withArrow
      arrowSize={3}
    >
      <Group spacing="xs">{swatches}</Group>
    </Popover>
  );
}

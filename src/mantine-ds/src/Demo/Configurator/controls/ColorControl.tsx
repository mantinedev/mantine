import React from 'react';
import { Group, Input, useMantineTheme, ColorSwatch, CheckIcon, rem } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

interface ColorControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function ColorControl({ value, label, onChange, ...others }: ColorControlProps) {
  const theme = useMantineTheme();

  const colors = Object.keys(theme.colors).map((color) => (
    <ColorSwatch
      color={theme.colorScheme === 'dark' ? theme.colors[color][7] : theme.colors[color][5]}
      component="button"
      key={color}
      onClick={() => onChange(color)}
      radius="sm"
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors[color][2] : theme.white,
        flex: `1 0 calc(15% - ${rem(4)})`,
      }}
    >
      {value === color && <CheckIcon width={rem(12)} height={rem(12)} />}
    </ColorSwatch>
  ));

  return (
    <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
      <Group spacing={2} mt={5}>
        {colors}
      </Group>
    </Input.Wrapper>
  );
}

ColorControl.initialValue = 'blue';

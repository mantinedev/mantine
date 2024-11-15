import { useState } from 'react';
import { getContrastColor, Text, Tooltip, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import classes from './ColorsGroup.module.css';

interface ColorsGroupProps {
  group: string;
}

export function ColorsGroup({ group }: ColorsGroupProps) {
  const theme = useMantineTheme();
  const colors = theme.colors[group];
  const [active, setActive] = useState({ color: colors[6], index: 6 });
  const clipboard = useClipboard({ timeout: 500 });

  const swatches = colors.map((color, index) => (
    <UnstyledButton
      aria-label="Copy color value"
      className={classes.secondarySwatch}
      key={color}
      onMouseEnter={() => setActive({ color, index })}
      onClick={() => clipboard.copy(color)}
      style={{
        background: color,
        color: getContrastColor({
          color,
          theme: { ...theme, luminanceThreshold: 0.25 },
          autoContrast: true,
        }),
      }}
    />
  ));

  return (
    <Tooltip
      color={clipboard.copied ? 'teal.8' : undefined}
      label={clipboard.copied ? 'Copied!' : 'Hover colors for preview, click to copy HEX value'}
      multiline
      maw={190}
      position="top-start"
    >
      <div className={classes.root} onMouseLeave={() => setActive({ color: colors[6], index: 6 })}>
        <div className={classes.inner}>
          <UnstyledButton
            className={classes.primarySwatch}
            onClick={() => clipboard.copy(active.color)}
            style={{
              background: active.color,
              color: getContrastColor({ color: active.color, theme, autoContrast: true }),
            }}
          >
            <Text className={classes.name}>{group}</Text>
            <div className={classes.colorIndex}>{active.index}</div>
            <div className={classes.colorValue}>{active.color}</div>
          </UnstyledButton>

          <div className={classes.swatches}>{swatches}</div>
        </div>
      </div>
    </Tooltip>
  );
}

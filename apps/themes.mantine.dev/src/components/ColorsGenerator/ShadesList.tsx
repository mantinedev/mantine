'use client';

import cx from 'clsx';
import { Text, Tooltip, UnstyledButton } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import type { Palette } from './palette';
import classes from './ColorsGenerator.module.css';

interface ShadesListProps {
  palette: Palette;
  displayInfo: boolean;
}

export function ShadesList({ palette, displayInfo }: ShadesListProps) {
  const clipboard = useClipboard({ timeout: 1200 });

  return (
    <div className={classes.shades}>
      {palette.shades.map((shade) => (
        <div key={shade.index} className={classes.shade}>
          <Tooltip
            label={clipboard.copied ? 'Copied' : `Copy ${shade.value}`}
            position="top"
            withinPortal={false}
          >
            <UnstyledButton
              className={classes.swatch}
              style={{ backgroundColor: shade.hex }}
              data-base={shade.index === palette.baseColorIndex || undefined}
              data-text={shade.textColor}
              aria-label={`Shade ${shade.index}, ${shade.value}`}
              onClick={() => clipboard.copy(shade.value)}
            >
              {displayInfo && (
                <>
                  <span className={cx(classes.swatchIndex, classes.info)}>{shade.index}</span>
                  <span className={cx(classes.swatchContrast, classes.info)}>
                    <span className={classes.swatchSample}>Aa</span>
                    <span>{shade.contrast.toFixed(1)}</span>
                  </span>
                </>
              )}
            </UnstyledButton>
          </Tooltip>
          {displayInfo && (
            <Text className={cx(classes.shadeValue, classes.info)}>{shade.value}</Text>
          )}
        </div>
      ))}
    </div>
  );
}

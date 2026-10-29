'use client';

import { useMemo } from 'react';
import { generateColors } from '@mantine/colors-generator';
import { Button, Text } from '@mantine/core';
import { COLOR_PRESETS, type ColorPreset } from './color-presets';
import { SCHEME_DEFAULTS, toGeneratorOptions } from './params';
import classes from './ColorsGenerator.module.css';

interface PresetsProps {
  onSelect: (preset: ColorPreset) => void;
}

export function Presets({ onSelect }: PresetsProps) {
  const strips = useMemo(
    () =>
      COLOR_PRESETS.map((preset) =>
        generateColors(preset.color, toGeneratorOptions({ ...SCHEME_DEFAULTS, ...preset.light }))
      ),
    []
  );

  return (
    <div>
      <Text size="sm" className={classes.sectionLabel} mb="sm">
        Presets
      </Text>
      <div className={classes.presets}>
        {COLOR_PRESETS.map((preset, index) => (
          <Button
            key={preset.name}
            variant="default"
            onClick={() => onSelect(preset)}
            leftSection={
              <span className={classes.presetStrip}>
                {strips[index].map((shade, shadeIndex) => (
                  <span
                    key={shadeIndex}
                    className={classes.presetShade}
                    style={{ backgroundColor: shade }}
                  />
                ))}
              </span>
            }
          >
            {preset.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

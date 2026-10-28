'use client';

import { IconPlus } from '@tabler/icons-react';
import { ActionIcon, Button, CheckIcon, ColorSwatch, Text } from '@mantine/core';
import {
  getCustomNeutralKey,
  hasThemeNeutral,
  type Neutral,
  NEUTRAL_LIBRARY,
  NEUTRAL_PRESETS,
  resolveNeutral,
  THEME_NEUTRAL,
  type ThemeOverrides,
} from '@/preview';
import classes from './EditorSidebar.module.css';

interface NeutralOption {
  key: string;
  label: string;
  shades: readonly string[];
  custom?: boolean;
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

interface NeutralShadesProps {
  shades: readonly string[];
  withIndices?: boolean;
}

export function NeutralShades({ shades, withIndices = true }: NeutralShadesProps) {
  return (
    <div className={classes.shades}>
      {shades.map((shade, index) => (
        <div key={index} className={classes.shade}>
          <ColorSwatch color={shade} radius="sm" className={classes.shadeSwatch} />
          {withIndices && (
            <Text size="xs" className={classes.shadeIndex}>
              {index}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}

interface NeutralSwatchesProps {
  neutral: Neutral;
  label: string;
  themeRamp: string[];
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export function NeutralSwatches({
  neutral,
  label,
  themeRamp,
  overrides,
  setParams,
  onAdd,
  onEdit,
}: NeutralSwatchesProps) {
  const selectionKey = `${neutral}Neutral` as const;
  const customKey = `${neutral}Custom` as const;
  const customRamps = overrides[customKey] ?? [];
  const withTheme = themeRamp.length > 0 && hasThemeNeutral(neutral, themeRamp);

  const options: NeutralOption[] = [
    ...(withTheme ? [{ key: THEME_NEUTRAL, label: 'Preset', shades: themeRamp }] : []),
    ...NEUTRAL_PRESETS.map((preset) => ({
      key: preset,
      label: capitalize(preset),
      shades: NEUTRAL_LIBRARY[neutral][preset],
    })),
    ...customRamps.map((ramp, index) => ({
      key: getCustomNeutralKey(index),
      label: ramp.name,
      shades: ramp.shades,
      custom: true,
    })),
  ];

  const selection =
    overrides[selectionKey] && options.some((option) => option.key === overrides[selectionKey])
      ? overrides[selectionKey]!
      : withTheme
        ? THEME_NEUTRAL
        : 'default';
  const selected = options.find((option) => option.key === selection) ?? options[0];
  const shades =
    resolveNeutral(neutral, overrides[selectionKey], overrides[customKey]) ?? themeRamp;

  const removeSelected = () => {
    const index = customRamps.findIndex((_, i) => getCustomNeutralKey(i) === selection);
    const next = customRamps.filter((_, i) => i !== index);
    setParams({
      [customKey]: next.length > 0 ? next : null,
      [selectionKey]: null,
    } as Partial<ThemeOverrides>);
  };

  const selectOption = (option: NeutralOption) => {
    if (option.custom && option.key === selection) {
      onEdit(customRamps.findIndex((_, index) => getCustomNeutralKey(index) === option.key));
      return;
    }

    setParams({
      [selectionKey]:
        option.key === THEME_NEUTRAL || (!withTheme && option.key === 'default')
          ? null
          : option.key,
    } as Partial<ThemeOverrides>);
  };

  const renderSwatch = (option: NeutralOption) => (
    <ColorSwatch
      key={option.key}
      component="button"
      type="button"
      color={option.shades[5]}
      aria-label={`${label}: ${option.label}`}
      aria-pressed={option.key === selection}
      onClick={() => selectOption(option)}
      className={classes.swatch}
      styles={{
        colorOverlay: {
          background: `linear-gradient(135deg, ${option.shades[1]} 0 50%, ${option.shades[7]} 50% 100%)`,
        },
      }}
    >
      {option.key === selection && (
        <span className={classes.neutralCheck}>
          <CheckIcon className={classes.neutralCheckIcon} />
        </span>
      )}
    </ColorSwatch>
  );

  return (
    <div className={classes.neutral}>
      <div className={`${classes.controlHead} ${classes.neutralHead}`}>
        <Text size="sm" className={classes.label}>
          {label}: {selected?.label}
        </Text>
        {selection.startsWith('custom-') && (
          <Button variant="default" size="compact-xs" onClick={removeSelected}>
            Remove
          </Button>
        )}
      </div>
      <NeutralShades shades={shades} />
      <div className={classes.swatches}>
        {options.filter((option) => !option.custom).map(renderSwatch)}
        {customRamps.length > 0 && <div className={classes.swatchDivider} />}
        {options.filter((option) => option.custom).map(renderSwatch)}
        <ActionIcon
          variant="default"
          radius="xl"
          aria-label={`Add ${neutral} color`}
          onClick={onAdd}
          className={classes.addColor}
        >
          <IconPlus size={14} />
        </ActionIcon>
      </div>
    </div>
  );
}

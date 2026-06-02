import { useState } from 'react';
import { useRouter } from 'next/router';
import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import {
  Button,
  ColorPicker,
  ColorSwatch,
  Group,
  Input,
  rem,
  SegmentedControl,
  Switch,
  TextInput,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import type { ColorFormat } from '../ColorsGenerator';
import { COLORS_PRESET } from './colors-preset';
import classes from './ColorsInput.module.css';

function isValidColor(value: string): boolean {
  if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value)) {
    return true;
  }

  if (/^oklch\(\s*[\d.]+\s+[\d.]+\s+[\d.]+(\s*\/\s*[\d.]+)?\s*\)$/.test(value)) {
    const match = value.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/);
    if (match) {
      const l = parseFloat(match[1]);
      const c = parseFloat(match[2]);
      return l >= 0 && l <= 1 && c >= 0 && c <= 0.5;
    }
  }

  if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(value)) {
    return true;
  }

  if (/^hsl\(\s*[\d.]+\s*,\s*[\d.]+%\s*,\s*[\d.]+%\s*\)$/.test(value)) {
    return true;
  }

  return false;
}

interface ColorsInputProps {
  value: string;
  onChange: (value: string) => void;
  displayColorsInfo: boolean | undefined;
  setDisplayColorsInfo: (value: boolean) => void;
  colorFormat: ColorFormat;
  setColorFormat: (value: ColorFormat) => void;
}

export function ColorsInput({
  value,
  onChange,
  displayColorsInfo,
  setDisplayColorsInfo,
  colorFormat,
  setColorFormat,
}: ColorsInputProps) {
  const [inputState, setInputState] = useState(value);
  const [error, setError] = useState(false);
  const router = useRouter();
  const clipboard = useClipboard();

  const isHexValue = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value);

  const updateQuery = (color: string) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
      router.replace({ query: { ...router.query, color: color.replace('#', '') } }, undefined, {
        scroll: false,
      });
    }
  };

  const handleChange = (val: string) => {
    setInputState(val);
    onChange(val);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    const hasError = !isValidColor(val);
    setInputState(val);
    setError(hasError);
    if (!hasError) {
      onChange(val);
      updateQuery(val);
    }
  };

  const presetControls = COLORS_PRESET.map((preset) => (
    <Button
      variant="default"
      leftSection={<ColorSwatch size={20} color={preset.color} />}
      radius="md"
      key={preset.color}
      onClick={() => {
        handleChange(preset.color);
        updateQuery(preset.color);
      }}
    >
      {preset.name}
    </Button>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.inputs}>
        <TextInput
          value={inputState}
          onChange={handleInputChange}
          error={error}
          label="Enter base color"
          description="Hex (#5474B4) or oklch(0.56 0.106 263)"
          className={classes.input}
          size="md"
          radius="md"
        />
        {isHexValue && (
          <ColorPicker
            value={value}
            onChange={handleChange}
            onChangeEnd={updateQuery}
            size="lg"
            classNames={{ saturation: classes.saturation, wrapper: classes.colorPicker }}
          />
        )}

        <Input.Label size="md" mt="xl">
          Output format
        </Input.Label>
        <SegmentedControl
          value={colorFormat}
          onChange={(val) => setColorFormat(val as ColorFormat)}
          data={[
            { label: 'oklch', value: 'oklch' },
            { label: 'hex', value: 'hex' },
            { label: 'rgb', value: 'rgb' },
            { label: 'hsl', value: 'hsl' },
          ]}
          size="sm"
          radius="md"
        />

        <Switch
          className={classes.switch}
          label="Display colors info"
          size="md"
          checked={displayColorsInfo}
          onChange={(event) => setDisplayColorsInfo(event.currentTarget.checked)}
          mt="xl"
        />

        <Button
          fullWidth
          leftSection={
            clipboard.copied ? (
              <CheckIcon style={{ width: rem(18) }} />
            ) : (
              <CopyIcon style={{ width: rem(18) }} />
            )
          }
          rightSection={<span />}
          justify="space-between"
          size="md"
          mt="xl"
          radius="md"
          onClick={() => clipboard.copy(window.location.href)}
        >
          {clipboard.copied ? 'Copied' : 'Copy URL'}
        </Button>
      </div>
      <div className={classes.presets}>
        <Input.Label size="md">Preset</Input.Label>
        <Group gap="xs">{presetControls}</Group>
      </div>
    </div>
  );
}

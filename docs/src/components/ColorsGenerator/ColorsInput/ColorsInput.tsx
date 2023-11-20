import React, { useState } from 'react';
import { useRouter } from 'next/router';
import chroma from 'chroma-js';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import {
  ColorPicker,
  TextInput,
  Input,
  Button,
  ColorSwatch,
  Group,
  Switch,
  rem,
} from '@mantine/core';
import { COLORS_PRESET } from './colors-preset';
import classes from './ColorsInput.module.css';

interface ColorsInputProps {
  value: string;
  onChange(value: string): void;
  displayColorsInfo: boolean | undefined;
  setDisplayColorsInfo(value: boolean): void;
}

export function ColorsInput({
  value,
  onChange,
  displayColorsInfo,
  setDisplayColorsInfo,
}: ColorsInputProps) {
  const [inputState, setInputState] = useState(value);
  const [error, setError] = useState(false);
  const router = useRouter();
  const clipboard = useClipboard();

  const updateQuery = (color: string) => {
    router.replace({ query: { ...router.query, color: color.replace('#', '') } }, undefined, {
      scroll: false,
    });
  };

  const handleChange = (val: string) => {
    setInputState(val);
    onChange(val);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    const hasError = !chroma.valid(val);
    setInputState(val);
    setError(hasError);
    !hasError && onChange(val);
    !hasError && updateQuery(val);
  };

  const presetControls = COLORS_PRESET.map((color) => (
    <Button
      variant="default"
      leftSection={<ColorSwatch size={20} color={color.color} />}
      radius="md"
      key={color.color}
      onClick={() => {
        handleChange(color.color);
        updateQuery(color.color);
      }}
    >
      {color.name}
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
          className={classes.input}
          size="md"
          radius="md"
        />
        <ColorPicker
          value={value}
          onChange={handleChange}
          onChangeEnd={updateQuery}
          size="lg"
          classNames={{ saturation: classes.saturation, wrapper: classes.colorPicker }}
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
              <IconCheck style={{ width: rem(18) }} />
            ) : (
              <IconCopy style={{ width: rem(18) }} />
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

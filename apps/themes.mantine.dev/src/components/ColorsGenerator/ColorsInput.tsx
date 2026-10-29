'use client';

import { useEffect, useState } from 'react';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import {
  Button,
  ColorPicker,
  ColorSwatch,
  Input,
  SegmentedControl,
  Switch,
  TextInput,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { isColorName } from '@/preview';
import { toHex } from './palette';
import { isValidColor, normalizeColor, OUTPUT_FORMATS, type OutputFormat } from './params';
import classes from './ColorsGenerator.module.css';

interface ColorsInputProps {
  color: string;
  onColorChange: (value: string) => void;
  name: string;
  nameOverride: string | null;
  onNameChange: (value: string | null) => void;
  format: OutputFormat;
  onFormatChange: (value: OutputFormat) => void;
  displayInfo: boolean;
  onDisplayInfoChange: (value: boolean) => void;
}

export function ColorsInput({
  color,
  onColorChange,
  name,
  nameOverride,
  onNameChange,
  format,
  onFormatChange,
  displayInfo,
  onDisplayInfoChange,
}: ColorsInputProps) {
  const [draft, setDraft] = useState(color);
  const [nameDraft, setNameDraft] = useState(name);
  const clipboard = useClipboard();

  useEffect(() => {
    setDraft((current) => (normalizeColor(current) === color ? current : color));
  }, [color]);

  useEffect(() => {
    setNameDraft(name);
  }, [name]);

  const colorError = isValidColor(draft) ? null : 'Enter a hex, oklch, rgb or hsl color';
  const nameError =
    nameDraft === '' || isColorName(nameDraft)
      ? null
      : 'Use lowercase letters, numbers and dashes, starting with a letter';

  return (
    <div className={classes.column}>
      <TextInput
        label="Base color"
        description="This color is used as is in the generated palette"
        value={draft}
        error={colorError}
        leftSection={<ColorSwatch color={color} size={18} />}
        onChange={(event) => {
          const next = event.currentTarget.value;
          setDraft(next);
          if (isValidColor(next)) {
            onColorChange(normalizeColor(next));
          }
        }}
      />

      <ColorPicker
        fullWidth
        format="hex"
        value={toHex(color)}
        onChange={(next) => {
          setDraft(next);
          onColorChange(next);
        }}
      />

      <TextInput
        label="Color name"
        description="Key of the color in theme.colors, used in color props and CSS variables"
        value={nameDraft}
        error={nameError}
        onChange={(event) => {
          const next = event.currentTarget.value.trim().toLowerCase();
          setNameDraft(next);
          if (next === '') {
            onNameChange(null);
          } else if (isColorName(next)) {
            onNameChange(next);
          }
        }}
        onBlur={() => {
          if (nameDraft === '' && nameOverride === null) {
            setNameDraft(name);
          }
        }}
      />

      <div>
        <Input.Label>Output format</Input.Label>
        <SegmentedControl
          fullWidth
          value={format}
          onChange={(value) => onFormatChange(value as OutputFormat)}
          data={OUTPUT_FORMATS.map((item) => ({ label: item, value: item }))}
        />
      </div>

      <Switch
        label="Display colors info"
        description="Shade index, text contrast and color value on every swatch"
        checked={displayInfo}
        onChange={(event) => onDisplayInfoChange(event.currentTarget.checked)}
        classNames={{ label: classes.label }}
      />

      <Button
        variant="default"
        leftSection={clipboard.copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
        onClick={() => clipboard.copy(window.location.href)}
      >
        {clipboard.copied ? 'Copied' : 'Copy URL'}
      </Button>
    </div>
  );
}

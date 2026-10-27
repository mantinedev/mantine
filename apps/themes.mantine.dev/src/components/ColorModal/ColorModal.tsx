'use client';

import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import {
  Button,
  ColorPicker,
  ColorSwatch,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { isBaseColor, isColorName, isHexColor, suggestColorName, toHexColor } from '@/preview';
import classes from './ColorModal.module.css';

export interface ColorModalResult {
  name: string;
  value: string;
}

interface ColorModalContentProps {
  initialValue: string;
  initialName?: string;
  withName: boolean;
  takenNames: Set<string>;
  submitLabel: string;
  getShades: (value: string) => string[] | null;
  onSubmit: (result: ColorModalResult) => void;
  onClose: () => void;
}

function ColorModalContent({
  initialValue,
  initialName,
  withName,
  takenNames,
  submitLabel,
  getShades,
  onSubmit,
  onClose,
}: ColorModalContentProps) {
  const [value, setValue] = useState(initialValue);
  const [input, setInput] = useState(initialValue);
  const [name, setName] = useState(initialName ?? '');
  const [nameTouched, setNameTouched] = useState(Boolean(initialName));
  const deferredValue = useDeferredValue(value);
  const shades = useMemo(() => getShades(deferredValue), [deferredValue, getShades]);

  useEffect(() => {
    if (!withName || nameTouched) {
      return undefined;
    }

    let active = true;
    suggestColorName(deferredValue, takenNames).then(
      (suggestion) => active && suggestion && setName(suggestion.name)
    );
    return () => {
      active = false;
    };
  }, [deferredValue, nameTouched, takenNames, withName]);

  const nameError = !withName
    ? null
    : !isColorName(name)
      ? 'Use lowercase letters, numbers and dashes, starting with a letter'
      : takenNames.has(name)
        ? 'This name is already used by another theme color'
        : null;
  const inputError = isBaseColor(input) ? null : 'Enter a hex or oklch color';

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!nameError && !inputError) {
          onSubmit({ name, value });
        }
      }}
    >
      <Stack gap="md">
        <ColorPicker
          fullWidth
          format="hex"
          value={isHexColor(value) ? value : toHexColor(value)}
          onChange={(next) => {
            setValue(next);
            setInput(next);
          }}
        />
        <TextInput
          label="Color"
          description="Hex or oklch value"
          value={input}
          error={inputError}
          leftSection={<ColorSwatch color={value} size={18} />}
          onChange={(event) => {
            const next = event.currentTarget.value.trim();
            setInput(next);
            if (isBaseColor(next)) {
              setValue(next);
            }
          }}
        />
        {withName && (
          <TextInput
            label="Name"
            description="Key of the color in the theme, used in color props and CSS variables"
            value={name}
            error={nameError}
            onChange={(event) => {
              setNameTouched(true);
              setName(event.currentTarget.value.trim().toLowerCase());
            }}
          />
        )}
        {shades && (
          <div>
            <Text size="sm" className={classes.label}>
              Generated shades
            </Text>
            <div className={classes.shades}>
              {shades.map((shade, index) => (
                <div key={index} className={classes.shade}>
                  <ColorSwatch color={shade} radius="sm" className={classes.swatch} />
                  <Text size="xs">{index}</Text>
                </div>
              ))}
            </div>
          </div>
        )}
        <Group justify="flex-end" gap="xs">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={Boolean(nameError || inputError)}>
            {submitLabel}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

interface ColorModalProps extends Omit<ColorModalContentProps, 'onClose'> {
  opened: boolean;
  title: string;
  onClose: () => void;
}

export function ColorModal({ opened, title, onClose, ...others }: ColorModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} title={title} size="md">
      {opened && <ColorModalContent {...others} onClose={onClose} />}
    </Modal>
  );
}

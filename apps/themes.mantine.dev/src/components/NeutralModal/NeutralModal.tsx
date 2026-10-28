'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Button,
  ColorInput,
  Divider,
  Group,
  Modal,
  Radio,
  Slider,
  Stack,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import {
  type CustomNeutral,
  generateNeutralPalette,
  isColorName,
  suggestColorName,
  hasThemeNeutral,
  isHexColor,
  mixNeutral,
  type Neutral,
  NEUTRAL_LIBRARY,
  NEUTRAL_PRESETS,
  type NeutralPreset,
  shiftLightness,
  THEME_NEUTRAL,
  toHexColor,
} from '@/preview';
import { NeutralShades } from '../EditorSidebar/NeutralSwatches';
import classes from './NeutralModal.module.css';

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

interface LabeledSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  disabled?: boolean;
  format: (value: number) => string;
  onChange: (value: number) => void;
}

function LabeledSlider({ label, value, min, max, disabled, format, onChange }: LabeledSliderProps) {
  return (
    <div>
      <div className={classes.sliderHead}>
        <Text size="sm" className={classes.label}>
          {label}
        </Text>
        <Text size="sm">{format(value)}</Text>
      </div>
      <Slider
        thumbLabel={label}
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        label={format}
        onChange={onChange}
      />
    </div>
  );
}

interface NeutralModalContentProps {
  neutral: Neutral;
  themeRamp: string[];
  primaryTint: string | undefined;
  initial: CustomNeutral | null;
  takenNames: Set<string>;
  onSubmit: (value: CustomNeutral) => void;
  onClose: () => void;
}

const CUSTOM_BASE = 'custom';
const CURRENT_BASE = 'current';

function NeutralModalContent({
  neutral,
  themeRamp,
  primaryTint,
  initial,
  takenNames,
  onSubmit,
  onClose,
}: NeutralModalContentProps) {
  const withPreset = hasThemeNeutral(neutral, themeRamp);
  const [base, setBase] = useState<string>(
    initial ? CURRENT_BASE : withPreset ? THEME_NEUTRAL : 'default'
  );
  const [name, setName] = useState(initial?.name ?? '');
  const [nameTouched, setNameTouched] = useState(Boolean(initial));
  const [color, setColor] = useState(
    toHexColor(themeRamp[neutral === 'gray' ? 6 : 7]) || '#808080'
  );
  const [shift, setShift] = useState(0);
  const [mixEnabled, setMixEnabled] = useState(false);
  const [mix, setMix] = useState(10);

  const options = [
    ...(initial ? [{ value: CURRENT_BASE, label: initial.name, shades: initial.shades }] : []),
    ...(withPreset ? [{ value: THEME_NEUTRAL, label: 'Preset', shades: themeRamp }] : []),
    ...NEUTRAL_PRESETS.map((value) => ({
      value,
      label: capitalize(value),
      shades: [...NEUTRAL_LIBRARY[neutral][value]],
    })),
  ];

  const canMix = base !== THEME_NEUTRAL && base !== CURRENT_BASE && Boolean(primaryTint);

  const ramp = useMemo(() => {
    const baseRamp =
      base === CUSTOM_BASE
        ? generateNeutralPalette(isHexColor(color) ? color : null, NEUTRAL_LIBRARY[neutral].default)
        : base === CURRENT_BASE && initial
          ? initial.shades
          : base === THEME_NEUTRAL
            ? themeRamp
            : [...NEUTRAL_LIBRARY[neutral][base as NeutralPreset]];
    const shifted = shiftLightness(baseRamp ?? NEUTRAL_LIBRARY[neutral].default, shift);
    return canMix && mixEnabled && primaryTint ? mixNeutral(shifted, primaryTint, mix) : shifted;
  }, [base, canMix, color, initial, mix, mixEnabled, neutral, primaryTint, shift, themeRamp]);

  const suggestionSource = ramp[5];
  useEffect(() => {
    if (nameTouched) {
      return undefined;
    }

    let active = true;
    suggestColorName(suggestionSource, takenNames).then(
      (suggestion) => active && suggestion && setName(suggestion.name)
    );
    return () => {
      active = false;
    };
  }, [nameTouched, suggestionSource, takenNames]);

  const nameError = !isColorName(name)
    ? 'Use lowercase letters, numbers and dashes, starting with a letter'
    : takenNames.has(name)
      ? 'This name is already used'
      : null;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!nameError) {
          onSubmit({ name, shades: ramp.map((shade) => toHexColor(shade) || shade) });
        }
      }}
    >
      <Stack gap="lg">
        <Stack gap="sm">
          <Text size="sm" className={classes.sectionTitle}>
            Base colors
          </Text>
          <Radio.Group value={base} onChange={setBase} aria-label="Base colors">
            <Stack gap="xs">
              {options.map((option) => (
                <Radio.Card key={option.value} value={option.value} className={classes.card}>
                  <div className={classes.cardHead}>
                    <Radio.Indicator size="xs" />
                    <Text size="sm" className={classes.label}>
                      {option.label}
                    </Text>
                  </div>
                  <NeutralShades shades={option.shades} withIndices={false} />
                </Radio.Card>
              ))}
              <Radio.Card value={CUSTOM_BASE} className={classes.card}>
                <div className={classes.cardHead}>
                  <Radio.Indicator size="xs" />
                  <Text size="sm" className={classes.label}>
                    Custom color
                  </Text>
                </div>
                <Text size="xs">
                  Shades follow the library lightness steps, one of them is your color
                </Text>
              </Radio.Card>
            </Stack>
          </Radio.Group>

          {base === CUSTOM_BASE && (
            <ColorInput
              label="Base color"
              format="hex"
              value={color}
              onChange={setColor}
              popoverProps={{ withinPortal: false }}
            />
          )}

          <LabeledSlider
            label="Adjust lightness"
            value={shift}
            min={-5}
            max={5}
            format={(value) => (value > 0 ? `+${value}%` : `${value}%`)}
            onChange={setShift}
          />
        </Stack>

        {canMix && (
          <>
            <Divider />
            <Stack gap="sm">
              <Text size="sm" className={classes.sectionTitle}>
                Primary color
              </Text>
              <Switch
                label="Mix with primary color"
                checked={mixEnabled}
                onChange={(event) => setMixEnabled(event.currentTarget.checked)}
              />
              <LabeledSlider
                label="Amount"
                value={mix}
                min={1}
                max={40}
                disabled={!mixEnabled}
                format={(value) => `${value}%`}
                onChange={setMix}
              />
            </Stack>
          </>
        )}

        <Divider />

        <div>
          <Text size="sm" className={classes.sectionTitle} mb={6}>
            Result
          </Text>
          <NeutralShades shades={ramp} />
        </div>

        <TextInput
          label="Name"
          value={name}
          error={nameError}
          onChange={(event) => {
            setNameTouched(true);
            setName(event.currentTarget.value.trim().toLowerCase());
          }}
        />

        <Group justify="flex-end" gap="xs">
          <Button variant="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={Boolean(nameError)}>
            {initial ? 'Save color' : 'Add color'}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

interface NeutralModalProps extends Omit<NeutralModalContentProps, 'onClose'> {
  opened: boolean;
  onClose: () => void;
  onExitTransitionEnd: () => void;
}

export function NeutralModal({
  opened,
  onClose,
  onExitTransitionEnd,
  neutral,
  ...others
}: NeutralModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      onExitTransitionEnd={onExitTransitionEnd}
      title={`${others.initial ? 'Edit' : 'Add'} ${neutral} color`}
      size="md"
    >
      <NeutralModalContent neutral={neutral} {...others} onClose={onClose} />
    </Modal>
  );
}

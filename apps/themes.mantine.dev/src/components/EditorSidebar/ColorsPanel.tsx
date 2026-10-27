'use client';

import { useCallback, useMemo, useState } from 'react';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  ColorSwatch,
  Group,
  type MantineColorShade,
  Stack,
  Text,
} from '@mantine/core';
import {
  type CustomColor,
  generateNeutralPalette,
  generatePalette,
  type PresetColorSwatch,
  type PresetThemeInfo,
  type ThemeOverrides,
  toHexColor,
} from '@/preview';
import { ColorModal, type ColorModalResult } from '../ColorModal';
import { Control, HexColorInput, Swatches, ValueSlider } from './controls';
import classes from './EditorSidebar.module.css';

const RESERVED_NAMES = ['gray', 'dark', 'white', 'black'];

type ModalState =
  | { type: 'add' }
  | { type: 'edit'; color: CustomColor }
  | { type: 'gray' }
  | { type: 'dark' }
  | null;

interface ShadesProps {
  shades: string[];
  light?: number;
  dark?: number;
}

function Shades({ shades, light, dark }: ShadesProps) {
  const withMarkers = light !== undefined || dark !== undefined;
  return (
    <div className={classes.shades}>
      {shades.map((shade, index) => (
        <div key={index} className={classes.shade}>
          <ColorSwatch color={shade} radius="sm" className={classes.shadeSwatch} />
          <Text size="xs" className={classes.shadeIndex}>
            {index}
          </Text>
          {withMarkers && (
            <Text size="xs" className={classes.shadeMarker}>
              {[index === light && 'L', index === dark && 'D'].filter(Boolean).join(' ')}
            </Text>
          )}
        </div>
      ))}
    </div>
  );
}

interface NeutralColorProps {
  label: string;
  shades: string[];
  customized: boolean;
  onEdit: () => void;
  onReset: () => void;
}

function NeutralColor({ label, shades, customized, onEdit, onReset }: NeutralColorProps) {
  return (
    <div>
      <div className={classes.controlHead}>
        <Text size="sm" className={classes.label}>
          {label}
        </Text>
        <Group gap={6}>
          {customized && (
            <Button variant="default" size="compact-xs" onClick={onReset}>
              Reset
            </Button>
          )}
          <Button variant="default" size="compact-xs" onClick={onEdit}>
            Change
          </Button>
        </Group>
      </div>
      <Shades shades={shades} />
    </div>
  );
}

interface ColorsPanelProps {
  info: PresetThemeInfo | null;
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
}

export function ColorsPanel({ info, overrides, setParams }: ColorsPanelProps) {
  const [modal, setModal] = useState<ModalState>(null);
  const customColors = useMemo(() => overrides.customColors ?? [], [overrides.customColors]);

  const customPalettes = useMemo(
    () =>
      customColors.flatMap((color) => {
        const palette = generatePalette(color.value);
        return palette ? [{ ...color, ...palette }] : [];
      }),
    [customColors]
  );

  const customSwatches: PresetColorSwatch[] = customPalettes.map((palette) => ({
    name: palette.name,
    value: palette.shades[palette.baseColorIndex],
    shades: palette.shades,
    custom: true,
  }));

  const presetSwatches =
    info?.swatches.filter(
      (swatch) => swatch.custom && !customColors.some((color) => color.name === swatch.name)
    ) ?? [];
  const librarySwatches = info?.swatches.filter((swatch) => !swatch.custom) ?? [];

  const customPrimary = customPalettes.find((palette) => palette.name === overrides.primaryColor);
  const primaryColor = customPrimary
    ? customPrimary.name
    : (overrides.primaryColor ?? info?.primaryColor ?? '');
  const shadeLight =
    overrides.primaryShadeLight ?? customPrimary?.baseColorIndex ?? info?.primaryShade.light ?? 6;
  const shadeDark =
    overrides.primaryShadeDark ?? customPrimary?.baseColorIndex ?? info?.primaryShade.dark ?? 8;
  const primaryShades =
    customPrimary?.shades ??
    info?.swatches.find((swatch) => swatch.name === primaryColor)?.shades ??
    [];

  const grayShades =
    (info && generateNeutralPalette(overrides.grayColor, info.gray)) ?? info?.gray ?? [];
  const darkShades =
    (info && generateNeutralPalette(overrides.darkColor, info.dark)) ?? info?.dark ?? [];

  const takenNames = useMemo(() => {
    const editing = modal?.type === 'edit' ? modal.color.name : null;
    return new Set([
      ...RESERVED_NAMES,
      ...(info?.swatches.map((swatch) => swatch.name) ?? []),
      ...customColors.map((color) => color.name).filter((name) => name !== editing),
    ]);
  }, [customColors, info, modal]);

  const selectPrimary = (name: string) =>
    setParams({ primaryColor: name, primaryShadeLight: null, primaryShadeDark: null });

  const getPalette = useCallback((value: string) => generatePalette(value)?.shades ?? null, []);
  const getGray = useCallback(
    (value: string) => (info ? generateNeutralPalette(value, info.gray) : null),
    [info]
  );
  const getDark = useCallback(
    (value: string) => (info ? generateNeutralPalette(value, info.dark) : null),
    [info]
  );

  const submitColor = ({ name, value }: ColorModalResult) => {
    if (modal?.type === 'edit') {
      const previous = modal.color.name;
      setParams({
        customColors: customColors.map((color) =>
          color.name === previous ? { name, value } : color
        ),
        ...(overrides.primaryColor === previous && {
          primaryColor: name,
          primaryShadeLight: null,
          primaryShadeDark: null,
        }),
      });
    } else {
      setParams({
        customColors: [...customColors, { name, value }],
        primaryColor: name,
        primaryShadeLight: null,
        primaryShadeDark: null,
      });
    }
    setModal(null);
  };

  const removeColor = (name: string) =>
    setParams({
      customColors: customColors.length > 1 ? customColors.filter((c) => c.name !== name) : null,
      ...(overrides.primaryColor === name && {
        primaryColor: null,
        primaryShadeLight: null,
        primaryShadeDark: null,
      }),
    });

  return (
    <Stack gap="md">
      <Control label="Mantine colors">
        <Swatches swatches={librarySwatches} value={primaryColor} onChange={selectPrimary} />
      </Control>

      {presetSwatches.length > 0 && (
        <Control label="Preset colors">
          <Swatches swatches={presetSwatches} value={primaryColor} onChange={selectPrimary} />
        </Control>
      )}

      <Control label="Custom colors">
        <Stack gap="xs">
          {customSwatches.length > 0 && (
            <Swatches swatches={customSwatches} value={primaryColor} onChange={selectPrimary} />
          )}
          {customColors.map((color) => (
            <div key={color.name} className={classes.customColor}>
              <ColorSwatch color={toHexColor(color.value) || color.value} size={18} />
              <Text size="sm" className={classes.customColorName}>
                {color.name}
              </Text>
              <ActionIcon
                variant="default"
                size="sm"
                aria-label={`Edit ${color.name}`}
                onClick={() => setModal({ type: 'edit', color })}
              >
                <IconPencil size={14} />
              </ActionIcon>
              <ActionIcon
                variant="default"
                size="sm"
                aria-label={`Remove ${color.name}`}
                onClick={() => removeColor(color.name)}
              >
                <IconTrash size={14} />
              </ActionIcon>
            </div>
          ))}
          <Button
            variant="default"
            leftSection={<IconPlus size={16} />}
            onClick={() => setModal({ type: 'add' })}
          >
            Add color
          </Button>
        </Stack>
      </Control>

      {primaryShades.length > 0 && (
        <Control label={`Primary color: ${primaryColor}`}>
          <Shades shades={primaryShades} light={shadeLight} dark={shadeDark} />
        </Control>
      )}

      <ValueSlider
        label="Primary shade, light scheme"
        value={shadeLight}
        min={0}
        max={9}
        onChange={(value) => setParams({ primaryShadeLight: value as MantineColorShade })}
      />
      <ValueSlider
        label="Primary shade, dark scheme"
        value={shadeDark}
        min={0}
        max={9}
        onChange={(value) => setParams({ primaryShadeDark: value as MantineColorShade })}
      />

      <NeutralColor
        label="Gray, light scheme neutrals"
        shades={grayShades}
        customized={overrides.grayColor !== null}
        onEdit={() => setModal({ type: 'gray' })}
        onReset={() => setParams({ grayColor: null })}
      />
      <NeutralColor
        label="Dark, dark scheme neutrals"
        shades={darkShades}
        customized={overrides.darkColor !== null}
        onEdit={() => setModal({ type: 'dark' })}
        onReset={() => setParams({ darkColor: null })}
      />

      <HexColorInput
        label="White"
        value={overrides.white ?? info?.white ?? null}
        onChange={(white) => setParams({ white })}
      />
      <HexColorInput
        label="Black"
        value={overrides.black ?? info?.black ?? null}
        onChange={(black) => setParams({ black })}
      />

      <ColorModal
        opened={modal?.type === 'add' || modal?.type === 'edit'}
        title={modal?.type === 'edit' ? `Edit ${modal.color.name}` : 'Add color'}
        submitLabel={modal?.type === 'edit' ? 'Save color' : 'Add color'}
        initialValue={modal?.type === 'edit' ? modal.color.value : '#5474b4'}
        initialName={modal?.type === 'edit' ? modal.color.name : undefined}
        withName
        takenNames={takenNames}
        getShades={getPalette}
        onSubmit={submitColor}
        onClose={() => setModal(null)}
      />

      <ColorModal
        opened={modal?.type === 'gray' || modal?.type === 'dark'}
        title={modal?.type === 'dark' ? 'Dark color' : 'Gray color'}
        submitLabel="Apply"
        initialValue={
          modal?.type === 'dark'
            ? (overrides.darkColor ?? (toHexColor(info?.dark[7]) || '#2e2e2e'))
            : (overrides.grayColor ?? (toHexColor(info?.gray[6]) || '#868e96'))
        }
        withName={false}
        takenNames={takenNames}
        getShades={modal?.type === 'dark' ? getDark : getGray}
        onSubmit={({ value }) => {
          setParams(modal?.type === 'dark' ? { darkColor: value } : { grayColor: value });
          setModal(null);
        }}
        onClose={() => setModal(null)}
      />
    </Stack>
  );
}

'use client';

import { useCallback, useMemo, useState } from 'react';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  ColorSwatch,
  Divider,
  type MantineColorShade,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import {
  type CustomColor,
  getCustomNeutralKey,
  type Neutral,
  generatePalette,
  type PresetColorSwatch,
  type PresetThemeInfo,
  type ThemeOverrides,
  toHexColor,
} from '@/preview';
import { ColorModal, type ColorModalResult } from '../ColorModal';
import { NeutralModal } from '../NeutralModal';
import { Control, HexColorInput, Swatches, ValueSlider } from './controls';
import { NeutralSwatches } from './NeutralSwatches';
import classes from './EditorSidebar.module.css';

const RESERVED_NAMES = ['gray', 'dark', 'white', 'black'];

type ModalState = { type: 'add' } | { type: 'edit'; color: CustomColor } | null;

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

interface ColorsPanelProps {
  info: PresetThemeInfo | null;
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
}

export function ColorsPanel({ info, overrides, setParams }: ColorsPanelProps) {
  const [modal, setModal] = useState<ModalState>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const openModal = (state: NonNullable<ModalState>) => {
    setModal(state);
    setModalOpened(true);
  };
  const closeModal = () => setModalOpened(false);
  const [neutralModal, setNeutralModal] = useState<{
    neutral: Neutral;
    editIndex: number | null;
  }>({ neutral: 'gray', editIndex: null });
  const [neutralModalOpened, setNeutralModalOpened] = useState(false);
  const openNeutralModal = (neutral: Neutral, editIndex: number | null = null) => {
    setNeutralModal({ neutral, editIndex });
    setNeutralModalOpened(true);
  };
  const customNeutralsByKind = overrides[`${neutralModal.neutral}Custom`];
  const neutralCustoms = useMemo(() => customNeutralsByKind ?? [], [customNeutralsByKind]);
  const neutralInitial =
    neutralModal.editIndex === null ? null : (neutralCustoms[neutralModal.editIndex] ?? null);
  const neutralTakenNames = useMemo(
    () =>
      new Set(
        neutralCustoms
          .filter((_, index) => index !== neutralModal.editIndex)
          .map((item) => item.name)
      ),
    [neutralCustoms, neutralModal.editIndex]
  );
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
    closeModal();
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
          <Swatches swatches={customSwatches} value={primaryColor} onChange={selectPrimary}>
            <ActionIcon
              variant="default"
              radius="xl"
              aria-label="Add color"
              onClick={() => openModal({ type: 'add' })}
              className={classes.addColor}
            >
              <IconPlus size={14} />
            </ActionIcon>
          </Swatches>
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
                onClick={() => openModal({ type: 'edit', color })}
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
        </Stack>
      </Control>

      {primaryShades.length > 0 && (
        <Control label={`Primary color: ${primaryColor}`}>
          <Shades shades={primaryShades} light={shadeLight} dark={shadeDark} />
        </Control>
      )}

      <SimpleGrid cols={2} spacing="md">
        <ValueSlider
          label="Light shade"
          value={shadeLight}
          min={0}
          max={9}
          onChange={(value) => setParams({ primaryShadeLight: value as MantineColorShade })}
        />
        <ValueSlider
          label="Dark shade"
          value={shadeDark}
          min={0}
          max={9}
          onChange={(value) => setParams({ primaryShadeDark: value as MantineColorShade })}
        />
      </SimpleGrid>

      <Divider />

      <Text size="sm" className={classes.sectionLabel}>
        Neutral colors
      </Text>

      <NeutralSwatches
        neutral="gray"
        label="Gray"
        themeRamp={info?.gray ?? []}
        overrides={overrides}
        setParams={setParams}
        onAdd={() => openNeutralModal('gray')}
        onEdit={(index) => openNeutralModal('gray', index)}
      />

      <NeutralSwatches
        neutral="dark"
        label="Dark"
        themeRamp={info?.dark ?? []}
        overrides={overrides}
        setParams={setParams}
        onAdd={() => openNeutralModal('dark')}
        onEdit={(index) => openNeutralModal('dark', index)}
      />

      <Divider />

      <SimpleGrid cols={2} spacing="xs">
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
      </SimpleGrid>

      <ValueSlider
        label="Disabled opacity"
        value={overrides.disabledOpacity ?? info?.disabledOpacity ?? 0.6}
        min={0.2}
        max={1}
        step={0.05}
        format={(value) => value.toFixed(2)}
        onChange={(disabledOpacity) => setParams({ disabledOpacity })}
      />

      <ColorModal
        opened={modalOpened}
        title={modal?.type === 'edit' ? `Edit ${modal.color.name}` : 'Add color'}
        submitLabel={modal?.type === 'edit' ? 'Save color' : 'Add color'}
        initialValue={modal?.type === 'edit' ? modal.color.value : '#5474b4'}
        initialName={modal?.type === 'edit' ? modal.color.name : undefined}
        withName
        takenNames={takenNames}
        getShades={getPalette}
        onSubmit={submitColor}
        onClose={closeModal}
        onExitTransitionEnd={() => setModal(null)}
      />

      <NeutralModal
        opened={neutralModalOpened}
        neutral={neutralModal.neutral}
        themeRamp={info?.[neutralModal.neutral] ?? []}
        primaryTint={primaryShades[6]}
        initial={neutralInitial}
        takenNames={neutralTakenNames}
        onClose={() => setNeutralModalOpened(false)}
        onExitTransitionEnd={() => setNeutralModal({ neutral: 'gray', editIndex: null })}
        onSubmit={(value) => {
          const { neutral, editIndex } = neutralModal;
          const customKey = `${neutral}Custom` as const;
          const current = overrides[customKey] ?? [];
          const ramps =
            editIndex === null
              ? [...current, value]
              : current.map((item, index) => (index === editIndex ? value : item));
          setParams({
            [customKey]: ramps,
            [`${neutral}Neutral`]: getCustomNeutralKey(editIndex ?? ramps.length - 1),
          } as Partial<ThemeOverrides>);
          setNeutralModalOpened(false);
        }}
      />
    </Stack>
  );
}

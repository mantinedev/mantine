'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  ColorSwatch,
  DEFAULT_THEME,
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
import { ColorEditor, type ColorEditorResult } from '../ColorEditor';
import { NeutralEditor } from '../NeutralEditor';
import { type ThemeDraft, useThemeDraft } from '../ThemeEditor/ThemeDraft.context';
import { Control, HexColorInput, Swatches, ValueSlider } from './controls';
import { NeutralSwatches } from './NeutralSwatches';
import classes from './EditorSidebar.module.css';

const RESERVED_NAMES = ['gray', 'dark', 'white', 'black'];
const EMPTY_RAMP: string[] = [];
const DRAFT_COLOR = '__draft';

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
  loading: boolean;
  overrides: ThemeOverrides;
  setParams: (values: Partial<ThemeOverrides>) => void;
}

export function ColorsPanel({ info, loading, overrides, setParams }: ColorsPanelProps) {
  const [modal, setModal] = useState<ModalState>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [neutralModal, setNeutralModal] = useState<{
    neutral: Neutral;
    editIndex: number | null;
  }>({ neutral: 'gray', editIndex: null });
  const [neutralModalOpened, setNeutralModalOpened] = useState(false);
  const { setDraft } = useThemeDraft();
  const lastDraft = useRef('');
  const showDraft = useCallback(
    (draft: ThemeDraft) => {
      const key = JSON.stringify(draft);
      if (key !== lastDraft.current) {
        lastDraft.current = key;
        setDraft(draft);
      }
    },
    [setDraft]
  );
  const clearDraft = () => {
    lastDraft.current = '';
    setDraft(null);
  };
  const neutralCustomsOverride = overrides[`${neutralModal.neutral}Custom`];
  const handleNeutralRamp = useCallback(
    (shades: string[]) => {
      if (!neutralModalOpened) {
        return;
      }

      const { neutral, editIndex } = neutralModal;
      const current = neutralCustomsOverride ?? [];
      const ramps =
        editIndex === null
          ? [...current, { name: DRAFT_COLOR, shades }]
          : current.map((item, index) => (index === editIndex ? { ...item, shades } : item));
      showDraft({
        [`${neutral}Custom`]: ramps,
        [`${neutral}Neutral`]: getCustomNeutralKey(editIndex ?? ramps.length - 1),
      });
    },
    [neutralCustomsOverride, neutralModal, neutralModalOpened, showDraft]
  );
  const openNeutralModal = (neutral: Neutral, editIndex: number | null = null) => {
    clearDraft();
    setNeutralModal({ neutral, editIndex });
    setNeutralModalOpened(true);
  };
  const neutralCustoms = useMemo(() => neutralCustomsOverride ?? [], [neutralCustomsOverride]);
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
  const libraryShade = info?.primaryShade.light ?? 6;
  const librarySwatches = useMemo(
    () =>
      Object.entries(DEFAULT_THEME.colors)
        .filter(([name]) => !RESERVED_NAMES.includes(name))
        .map(([name, shades]) => ({
          name,
          value: shades[libraryShade],
          shades: [...shades],
          custom: false,
        })),
    [libraryShade]
  );

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
    librarySwatches.find((swatch) => swatch.name === primaryColor)?.shades ??
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

  const openModal = (state: NonNullable<ModalState>) => {
    clearDraft();
    setModal(state);
    setModalOpened(true);
  };
  const closeModal = () => {
    setDraft(null);
    setModalOpened(false);
  };

  const editedColor = modal?.type === 'edit' ? modal.color.name : null;
  const currentPrimary = overrides.primaryColor;
  const handleColorValue = useCallback(
    (value: string) => {
      if (!modalOpened) {
        return;
      }

      const name = editedColor ?? DRAFT_COLOR;
      showDraft({
        customColors:
          editedColor === null
            ? [...customColors, { name, value }]
            : customColors.map((color) => (color.name === name ? { name, value } : color)),
        ...(currentPrimary !== name && {
          primaryColor: name,
          primaryShadeLight: null,
          primaryShadeDark: null,
        }),
      });
    },
    [currentPrimary, customColors, editedColor, modalOpened, showDraft]
  );

  const submitColor = ({ name, value }: ColorEditorResult) => {
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

      <Control label="Preset colors">
        {presetSwatches.length > 0 ? (
          <Swatches swatches={presetSwatches} value={primaryColor} onChange={selectPrimary} />
        ) : (
          <div className={classes.swatches}>
            <div className={classes.emptySwatch} />
            <Text size="xs">
              {loading ? 'Loading preset' : 'This preset has no colors of its own'}
            </Text>
          </div>
        )}
      </Control>

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
        themeRamp={info?.gray ?? EMPTY_RAMP}
        overrides={overrides}
        setParams={setParams}
        onAdd={() => openNeutralModal('gray')}
        onEdit={(index) => openNeutralModal('gray', index)}
      />

      <NeutralSwatches
        neutral="dark"
        label="Dark"
        themeRamp={info?.dark ?? EMPTY_RAMP}
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

      <ColorEditor
        opened={modalOpened}
        title={modal?.type === 'edit' ? `Edit ${modal.color.name}` : 'Add color'}
        submitLabel={modal?.type === 'edit' ? 'Save color' : 'Add color'}
        initialValue={modal?.type === 'edit' ? modal.color.value : '#5474b4'}
        initialName={modal?.type === 'edit' ? modal.color.name : undefined}
        withName
        takenNames={takenNames}
        getShades={getPalette}
        onValueChange={handleColorValue}
        onSubmit={submitColor}
        onClose={closeModal}
        onExitTransitionEnd={() => setModal(null)}
      />

      <NeutralEditor
        opened={neutralModalOpened}
        neutral={neutralModal.neutral}
        themeRamp={info?.[neutralModal.neutral] ?? EMPTY_RAMP}
        primaryTint={primaryShades[6]}
        initial={neutralInitial}
        takenNames={neutralTakenNames}
        onRampChange={handleNeutralRamp}
        onClose={() => {
          setDraft(null);
          setNeutralModalOpened(false);
        }}
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
          setDraft(null);
          setNeutralModalOpened(false);
        }}
      />
    </Stack>
  );
}

'use client';

import {
  Accordion,
  Button,
  Divider,
  ScrollArea,
  SegmentedControl,
  Select,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';
import { useEditorParams } from '@/hooks/use-editor-params';
import {
  CURSOR_TYPES,
  DEFAULT_OVERRIDES,
  FOCUS_RINGS,
  HEADING_WRAPS,
  type PresetThemeInfo,
  type ScaleGroup,
  SHADOW_PRESETS,
  type ThemeOverrides,
} from '@/preview';
import { FontPicker } from '../FontPicker';
import { ColorsPanel } from './ColorsPanel';
import { Control, ScaleControl } from './controls';
import classes from './EditorSidebar.module.css';

const PRESET = 'preset';

const PANELS = ['colors', 'typography', 'headings', 'spacing', 'radius', 'shadows', 'interaction'];

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function withPreset<T extends string>(values: readonly T[]) {
  return [
    { value: PRESET, label: 'Preset' },
    ...values.map((value) => ({ value, label: capitalize(value) })),
  ];
}

function fromPreset<T extends string>(value: string | null) {
  return value === null || value === PRESET ? null : (value as T);
}

interface EditorSidebarProps {
  info: PresetThemeInfo | null;
}

export function EditorSidebar({ info }: EditorSidebarProps) {
  const { overrides, setParams } = useEditorParams();
  const changed = JSON.stringify(overrides) !== JSON.stringify(DEFAULT_OVERRIDES);

  const scale = (group: ScaleGroup, label?: string) => (
    <ScaleControl
      group={group}
      label={label}
      base={info?.scales[group] ?? []}
      percent={overrides[group]}
      values={overrides[`${group}Values`]}
      onChange={({ percent, values }) =>
        setParams({ [group]: percent, [`${group}Values`]: values } as Partial<ThemeOverrides>)
      }
    />
  );

  const weightSelect = (
    label: string,
    key: 'fontWeightRegular' | 'fontWeightMedium' | 'fontWeightBold' | 'headingsWeight',
    fallback: number | undefined
  ) => (
    <Select
      label={label}
      data={WEIGHTS}
      value={String(overrides[key] ?? fallback ?? '')}
      onChange={(value) => setParams({ [key]: value ? Number(value) : null })}
      allowDeselect={false}
      comboboxProps={{ withinPortal: false }}
    />
  );

  return (
    <ScrollArea className={classes.root} scrollbarSize={4} offsetScrollbars="y">
      <div className={classes.header}>
        <Title order={2} size="h4" className={classes.title}>
          Theme
        </Title>
        <Button
          variant="default"
          size="xs"
          onClick={() => setParams(DEFAULT_OVERRIDES)}
          disabled={!changed}
        >
          Reset
        </Button>
      </div>

      <Accordion
        multiple
        defaultValue={PANELS}
        chevronPosition="right"
        classNames={{
          item: classes.panel,
          control: classes.panelControl,
          label: classes.panelLabel,
          content: classes.panelContent,
        }}
      >
        <Accordion.Item value="colors">
          <Accordion.Control>Colors</Accordion.Control>
          <Accordion.Panel>
            <ColorsPanel info={info} overrides={overrides} setParams={setParams} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="typography">
          <Accordion.Control>Typography</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <FontPicker
                label="Body font"
                defaultFamily={info?.fonts.body ?? ''}
                value={overrides.font}
                onChange={(font) => setParams({ font })}
              />
              <FontPicker
                label="Monospace font"
                defaultFamily={info?.fonts.mono ?? ''}
                value={overrides.monoFont}
                onChange={(monoFont) => setParams({ monoFont })}
              />
              <Divider />
              {scale('fontSizes')}
              <Divider />
              {scale('lineHeights')}
              <Divider />
              <SimpleGrid cols={3} spacing="xs">
                {weightSelect('Regular', 'fontWeightRegular', info?.fontWeights.regular)}
                {weightSelect('Medium', 'fontWeightMedium', info?.fontWeights.medium)}
                {weightSelect('Bold', 'fontWeightBold', info?.fontWeights.bold)}
              </SimpleGrid>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="headings">
          <Accordion.Control>Headings</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <FontPicker
                label="Headings font"
                defaultFamily={info?.fonts.headings ?? ''}
                value={overrides.headingsFont}
                onChange={(headingsFont) => setParams({ headingsFont })}
              />
              {weightSelect('Headings weight', 'headingsWeight', info?.headingsWeight)}
              <Select
                label="Text wrap"
                data={HEADING_WRAPS.map((value) => ({ value, label: capitalize(value) }))}
                value={overrides.headingsWrap ?? info?.headingsWrap ?? 'wrap'}
                onChange={(value) =>
                  setParams({ headingsWrap: value as ThemeOverrides['headingsWrap'] })
                }
                allowDeselect={false}
                comboboxProps={{ withinPortal: false }}
              />
              {scale('headingSizes')}
              {scale('headingLineHeights')}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="spacing">
          <Accordion.Control>Spacing</Accordion.Control>
          <Accordion.Panel>{scale('spacing', 'All sizes')}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="radius">
          <Accordion.Control>Radius</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              {scale('radius', 'All sizes')}
              <Select
                label="Default radius"
                data={info?.scales.radius.map((item) => item.key) ?? []}
                value={overrides.defaultRadius ?? (info?.defaultRadius || null)}
                onChange={(defaultRadius) => setParams({ defaultRadius })}
                allowDeselect={false}
                comboboxProps={{ withinPortal: false }}
              />
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="shadows">
          <Accordion.Control>Shadows</Accordion.Control>
          <Accordion.Panel>
            <SegmentedControl
              fullWidth
              aria-label="Shadows"
              value={overrides.shadows ?? PRESET}
              onChange={(value) => setParams({ shadows: fromPreset(value) })}
              data={withPreset(SHADOW_PRESETS)}
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="interaction">
          <Accordion.Control>Interaction</Accordion.Control>
          <Accordion.Panel>
            <Stack gap="md">
              <Control label="Focus ring">
                <SegmentedControl
                  fullWidth
                  aria-label="Focus ring"
                  value={overrides.focusRing ?? info?.focusRing ?? 'auto'}
                  onChange={(value) =>
                    setParams({ focusRing: value as ThemeOverrides['focusRing'] })
                  }
                  data={FOCUS_RINGS.map((value) => ({ value, label: capitalize(value) }))}
                />
              </Control>
              <Control label="Cursor on buttons and checkboxes">
                <SegmentedControl
                  fullWidth
                  aria-label="Cursor type"
                  value={overrides.cursorType ?? info?.cursorType ?? 'default'}
                  onChange={(value) =>
                    setParams({ cursorType: value as ThemeOverrides['cursorType'] })
                  }
                  data={CURSOR_TYPES.map((value) => ({ value, label: capitalize(value) }))}
                />
              </Control>
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ScrollArea>
  );
}

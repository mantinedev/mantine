import {
  Button,
  CheckIcon,
  ColorSwatch,
  ScrollArea,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  Text,
  Title,
  Tooltip,
  type MantineColorShade,
} from '@mantine/core';
import {
  DEFAULT_OVERRIDES,
  FONT_OPTIONS,
  type PresetColorSwatch,
  type PresetThemeInfo,
  type ThemeOverrides,
} from '@/preview';
import classes from './EditorSidebar.module.css';

const PRESET_FONT = 'preset';

const fontOptions = [
  { value: PRESET_FONT, label: 'Preset font' },
  ...FONT_OPTIONS.map((option) => ({ value: option.value, label: option.label })),
];

interface EditorSidebarProps {
  info: PresetThemeInfo | null;
  overrides: ThemeOverrides;
  onChange: (values: Partial<ThemeOverrides>) => void;
  onReset: () => void;
}

interface ControlProps {
  label: string;
  value?: string;
  children: React.ReactNode;
}

function Control({ label, value, children }: ControlProps) {
  return (
    <div>
      <div className={classes.controlHead}>
        <Text size="sm" className={classes.label}>
          {label}
        </Text>
        {value && (
          <Text size="sm" className={classes.value}>
            {value}
          </Text>
        )}
      </div>
      {children}
    </div>
  );
}

interface ScaleSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

function ScaleSlider({ label, value, min, max, onChange }: ScaleSliderProps) {
  const percent = Math.round(value * 100);
  return (
    <Control label={label} value={`${percent}%`}>
      <Slider
        thumbLabel={label}
        min={min}
        max={max}
        step={5}
        value={percent}
        onChange={(next) => onChange(next / 100)}
        label={(next) => `${next}%`}
      />
    </Control>
  );
}

interface SwatchesProps {
  swatches: PresetColorSwatch[];
  value: string;
  onChange: (value: string) => void;
}

function Swatches({ swatches, value, onChange }: SwatchesProps) {
  return (
    <SimpleGrid cols={8} spacing={8} verticalSpacing={8}>
      {swatches.map((swatch) => (
        <Tooltip key={swatch.name} label={swatch.name} openDelay={300}>
          <ColorSwatch
            component="button"
            type="button"
            color={swatch.value}
            aria-label={swatch.name}
            aria-pressed={swatch.name === value}
            onClick={() => onChange(swatch.name)}
            className={classes.swatch}
          >
            {swatch.name === value && <CheckIcon className={classes.check} />}
          </ColorSwatch>
        </Tooltip>
      ))}
    </SimpleGrid>
  );
}

export function EditorSidebar({ info, overrides, onChange, onReset }: EditorSidebarProps) {
  const primaryColor = overrides.primaryColor ?? info?.primaryColor ?? '';
  const primaryShade = overrides.primaryShade ?? info?.primaryShade ?? { light: 6, dark: 8 };
  const customSwatches = info?.swatches.filter((swatch) => swatch.custom) ?? [];
  const mantineSwatches = info?.swatches.filter((swatch) => !swatch.custom) ?? [];
  const changed = JSON.stringify(overrides) !== JSON.stringify(DEFAULT_OVERRIDES);

  return (
    <ScrollArea className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <Title order={2} size="h4" className={classes.title}>
            Theme
          </Title>
          <Button variant="default" size="xs" onClick={onReset} disabled={!changed}>
            Reset
          </Button>
        </div>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Colors
          </Title>
          <Stack gap="md">
            {customSwatches.length > 0 && (
              <Control label="Preset colors">
                <Swatches
                  swatches={customSwatches}
                  value={primaryColor}
                  onChange={(value) => onChange({ primaryColor: value })}
                />
              </Control>
            )}
            <Control label="Mantine colors">
              <Swatches
                swatches={mantineSwatches}
                value={primaryColor}
                onChange={(value) => onChange({ primaryColor: value })}
              />
            </Control>
            <Control label="Primary shade, light scheme" value={String(primaryShade.light)}>
              <Slider
                thumbLabel="Primary shade in light scheme"
                min={0}
                max={9}
                value={primaryShade.light}
                onChange={(light) =>
                  onChange({ primaryShade: { ...primaryShade, light: light as MantineColorShade } })
                }
              />
            </Control>
            <Control label="Primary shade, dark scheme" value={String(primaryShade.dark)}>
              <Slider
                thumbLabel="Primary shade in dark scheme"
                min={0}
                max={9}
                value={primaryShade.dark}
                onChange={(dark) =>
                  onChange({ primaryShade: { ...primaryShade, dark: dark as MantineColorShade } })
                }
              />
            </Control>
          </Stack>
        </section>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Typography
          </Title>
          <Stack gap="md">
            <Select
              label="Body font"
              data={fontOptions}
              value={overrides.fontFamily ?? PRESET_FONT}
              onChange={(value) =>
                onChange({ fontFamily: !value || value === PRESET_FONT ? null : value })
              }
              allowDeselect={false}
              comboboxProps={{ floatingStrategy: 'fixed' }}
            />
            <Select
              label="Headings font"
              data={fontOptions}
              value={overrides.headingsFontFamily ?? PRESET_FONT}
              onChange={(value) =>
                onChange({ headingsFontFamily: !value || value === PRESET_FONT ? null : value })
              }
              allowDeselect={false}
              comboboxProps={{ floatingStrategy: 'fixed' }}
            />
            <ScaleSlider
              label="Font size"
              value={overrides.fontSizeScale}
              min={80}
              max={130}
              onChange={(fontSizeScale) => onChange({ fontSizeScale })}
            />
          </Stack>
        </section>

        <section className={classes.section}>
          <Title order={3} size="h6" className={classes.sectionTitle}>
            Shape and density
          </Title>
          <Stack gap="md">
            <ScaleSlider
              label="Radius"
              value={overrides.radiusScale}
              min={0}
              max={250}
              onChange={(radiusScale) => onChange({ radiusScale })}
            />
            <ScaleSlider
              label="Spacing"
              value={overrides.spacingScale}
              min={50}
              max={150}
              onChange={(spacingScale) => onChange({ spacingScale })}
            />
            <ScaleSlider
              label="Scale"
              value={overrides.scale}
              min={80}
              max={120}
              onChange={(scale) => onChange({ scale })}
            />
          </Stack>
        </section>
      </div>
    </ScrollArea>
  );
}

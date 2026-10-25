import {
  CheckIcon,
  CircleHalfIcon,
  FireIcon,
  MoonIcon,
  PaletteIcon,
  SnowflakeIcon,
  SunIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@phosphor-icons/react';
import {
  Button,
  CloseButton,
  ColorSwatch,
  Group,
  Popover,
  SegmentedControl,
  Stack,
  Switch,
  Text,
  useComputedColorScheme,
  useDirection,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeaderControl } from '@mantinex/mantine-header';
import { DarkTint, PRIMARY_COLOR_OPTIONS, useThemeSettings } from './theme-settings';
import classes from './ThemeControl.module.css';

interface SettingRowProps {
  label: string;
  children: React.ReactNode;
}

function SettingRow({ label, children }: SettingRowProps) {
  return (
    <div>
      <Text size="sm" className={classes.label}>
        {label}
      </Text>
      {children}
    </div>
  );
}

interface SegmentLabelProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SegmentLabel({ icon, children }: SegmentLabelProps) {
  return (
    <span className={classes.segmentLabel}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

const ICON_SIZE = 18;

export function ThemeControl() {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const { dir, setDirection } = useDirection();
  const { settings, setPrimaryColor, setDarkTint, setMixWithPrimary, reset } = useThemeSettings();
  const isLight = colorScheme === 'light';

  const swatches = PRIMARY_COLOR_OPTIONS.map((color) => {
    const selected = settings.primaryColor === color;
    return (
      <ColorSwatch
        key={color}
        component="button"
        type="button"
        color={theme.colors[color][6]}
        className={classes.swatch}
        onClick={() => setPrimaryColor(color)}
        aria-label={`${color} primary color`}
        aria-pressed={selected}
      >
        {selected && <CheckIcon size={18} weight="bold" className={classes.swatchCheck} />}
      </ColorSwatch>
    );
  });

  return (
    <Popover
      opened={opened}
      onChange={(value) => !value && close()}
      width={320}
      position="bottom-end"
      floatingStrategy="fixed"
      shadow="md"
      radius="md"
      transitionProps={{ transition: 'pop-top-right', duration: 100 }}
      classNames={{ dropdown: classes.dropdown }}
    >
      <Popover.Target>
        <HeaderControl tooltip="Theme settings" aria-label="Open theme settings" onClick={toggle}>
          <PaletteIcon size={22} />
        </HeaderControl>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap="md">
          <Group justify="space-between" className={classes.mobileHeader}>
            <Text fw={600}>Theme settings</Text>
            <CloseButton onClick={close} aria-label="Close theme settings" />
          </Group>

          <SettingRow label="Color scheme">
            <SegmentedControl
              fullWidth
              size="sm"
              value={colorScheme}
              onChange={(value) => setColorScheme(value as 'light' | 'dark')}
              data={[
                {
                  value: 'light',
                  label: <SegmentLabel icon={<SunIcon size={ICON_SIZE} />}>Light</SegmentLabel>,
                },
                {
                  value: 'dark',
                  label: <SegmentLabel icon={<MoonIcon size={ICON_SIZE} />}>Dark</SegmentLabel>,
                },
              ]}
            />
          </SettingRow>

          <SettingRow label="Direction">
            <SegmentedControl
              fullWidth
              size="sm"
              value={dir}
              onChange={(value) => setDirection(value as 'ltr' | 'rtl')}
              data={[
                {
                  value: 'ltr',
                  label: (
                    <SegmentLabel icon={<TextAlignLeftIcon size={ICON_SIZE} />}>LTR</SegmentLabel>
                  ),
                },
                {
                  value: 'rtl',
                  label: (
                    <SegmentLabel icon={<TextAlignRightIcon size={ICON_SIZE} />}>RTL</SegmentLabel>
                  ),
                },
              ]}
            />
          </SettingRow>

          <SettingRow label="Dark mode tint">
            <Stack gap="xs">
              <SegmentedControl
                fullWidth
                size="sm"
                disabled={isLight}
                value={settings.darkTint}
                onChange={(value) => setDarkTint(value as DarkTint)}
                data={[
                  {
                    value: 'default',
                    label: (
                      <SegmentLabel icon={<CircleHalfIcon size={ICON_SIZE} />}>
                        Default
                      </SegmentLabel>
                    ),
                  },
                  {
                    value: 'warm',
                    label: <SegmentLabel icon={<FireIcon size={ICON_SIZE} />}>Warm</SegmentLabel>,
                  },
                  {
                    value: 'cold',
                    label: (
                      <SegmentLabel icon={<SnowflakeIcon size={ICON_SIZE} />}>Cold</SegmentLabel>
                    ),
                  },
                ]}
              />
              <Switch
                size="md"
                label="Mix with primary color"
                disabled={isLight}
                checked={settings.mixWithPrimary}
                onChange={(event) => setMixWithPrimary(event.currentTarget.checked)}
              />
            </Stack>
          </SettingRow>

          <SettingRow label="Primary color">
            <div className={classes.swatches}>{swatches}</div>
          </SettingRow>

          <Button variant="default" size="sm" onClick={reset}>
            Reset to defaults
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

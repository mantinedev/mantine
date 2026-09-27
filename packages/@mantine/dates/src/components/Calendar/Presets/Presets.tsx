import { Box, getFontSize, GetStylesApiOptions, MantineSize } from '@mantine/core';
import { useDatesDropdownContext } from '../../PickerInputBase/DatesDropdown.context';
import { PresetsList, PresetsListPreset } from './PresetsList';
import classes from './Presets.module.css';

export type PresetsStylesNames = 'presetsList' | 'presetButton';

export type PresetsGetStyles = (
  selector: any,
  options?: GetStylesApiOptions
) => { className?: string; style?: React.CSSProperties };

export interface PresetsProps {
  presets: PresetsListPreset[] | undefined;
  onPresetSelect: (value: any) => void;
  getStyles: PresetsGetStyles;
  rootSelector: string;
  size: MantineSize | undefined;
  rootProps?: Record<string, any>;
  children: React.ReactNode;
}

export function getPresetsClasses<RootSelector extends string>(rootSelector: RootSelector) {
  return {
    [rootSelector]: classes.presetsRoot,
    presetsList: classes.presetsList,
    presetButton: classes.presetButton,
  } as Record<RootSelector | PresetsStylesNames, string>;
}

export function Presets({
  presets,
  onPresetSelect,
  getStyles,
  rootSelector,
  size,
  rootProps,
  children,
}: PresetsProps) {
  const dropdown = useDatesDropdownContext();

  if (!presets) {
    return <>{children}</>;
  }

  const rootStyles = getStyles(rootSelector);

  return (
    <Box
      {...rootStyles}
      style={{ '--preset-font-size': getFontSize(size), ...rootStyles.style }}
      size={size}
      data-layout={dropdown.layout}
      {...rootProps}
    >
      <PresetsList
        {...getStyles('presetsList')}
        presets={presets}
        onPresetSelect={onPresetSelect}
        buttonProps={getStyles('presetButton')}
      />
      {children}
    </Box>
  );
}

Presets.displayName = '@mantine/dates/Presets';

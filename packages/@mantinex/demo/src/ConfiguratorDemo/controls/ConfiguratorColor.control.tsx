import { useState } from 'react';
import {
  BoxProps,
  CheckIcon,
  ColorPicker,
  ColorSwatch,
  DEFAULT_THEME,
  ElementProps,
  Group,
  Input,
  Popover,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { ColorWheelIcon } from './ColorWheelIcon';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';
import classes from './ConfiguratorColor.control.module.css';

export type ConfiguratorColorControlOptions = ConfiguratorControl<
  'color',
  { initialValue: string }
>;

export interface ConfiguratorColorControlProps
  extends BoxProps,
    ElementProps<'div', 'onChange' | 'value' | 'size'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorColorControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorColorControlProps) {
  const [colorPickerColor, setColorPickerColor] = useState('#fff');

  const handleColorPickerChange = (color: string) => {
    setColorPickerColor(color);
    onChange(color);
  };

  const colors = Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <ColorSwatch
        color={`var(--mantine-color-${color}-filled)`}
        component="button"
        key={color}
        onClick={() => onChange(color)}
        radius="sm"
        className={classes.swatch}
        aria-label={color}
      >
        {value === color && <CheckIcon className={classes.check} />}
      </ColorSwatch>
    ));

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Group gap={2} mt={2} wrap="wrap">
        {colors}
        <Popover radius="md" position="bottom-end" shadow="md">
          <Popover.Target>
            <UnstyledButton className={classes.colorControl} aria-label="Pick color">
              <ColorWheelIcon />
            </UnstyledButton>
          </Popover.Target>

          <Popover.Dropdown p={8}>
            <ColorPicker
              value={colorPickerColor}
              onChange={handleColorPickerChange}
              format="rgba"
            />
            <TextInput
              value={colorPickerColor}
              onChange={(event) => handleColorPickerChange(event.currentTarget.value)}
              placeholder="Enter color"
              radius="md"
              size="xs"
              mt="xs"
            />
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Input.Wrapper>
  );
}

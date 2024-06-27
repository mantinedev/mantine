import { forwardRef } from 'react';
import { Box, ElementProps } from '../../../core';
import { ColorSwatch } from '../../ColorSwatch';
import { useColorPickerContext } from '../ColorPicker.context';

export interface SwatchesProps extends ElementProps<'div'> {
  size?: string | number;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  setValue: (value: string) => void;
}

export const Swatches = forwardRef<HTMLDivElement, SwatchesProps>(
  (
    {
      className,
      datatype,
      setValue,
      onChangeEnd,
      size,
      focusable,
      data,
      swatchesPerRow,
      ...others
    },
    ref
  ) => {
    const ctx = useColorPickerContext()!;

    const colors = data.map((color, index) => (
      <ColorSwatch
        {...ctx.getStyles('swatch')}
        unstyled={ctx.unstyled}
        component="button"
        type="button"
        color={color}
        key={index}
        radius="sm"
        onClick={() => {
          setValue(color);
          onChangeEnd?.(color);
        }}
        aria-label={color}
        tabIndex={focusable ? 0 : -1}
        data-swatch
      />
    ));

    return (
      <Box {...ctx.getStyles('swatches')} ref={ref} {...others}>
        {colors}
      </Box>
    );
  }
);

Swatches.displayName = '@mantine/core/Swatches';

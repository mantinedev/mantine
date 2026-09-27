import { MantineSize } from '@mantine/core';

const SMALL_SIZES = ['xs', 'sm'];

export function getSheetPickerProps(size: MantineSize | (string & {}) | undefined) {
  return {
    numberOfColumns: 1,
    columnsToScroll: 1,
    fullWidth: true,
    size: size === undefined || SMALL_SIZES.includes(size) ? 'md' : size,
  };
}

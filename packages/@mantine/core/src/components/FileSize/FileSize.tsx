import { ExtendComponent, Factory, MantineThemeComponent, useProps } from '../../core';
import { formatBytes, FormatBytesOptions } from './format-bytes';

export interface FileSizeProps extends FormatBytesOptions {
  /** Value in bytes to format, or in bits when `unit="bit"` */
  value?: number;
}

export type FileSizeFactory = Factory<{
  props: FileSizeProps;
  ref: HTMLSpanElement;
}>;

export function FileSize(_props: FileSizeProps) {
  const { value, unit, unitSystem, unitDisplay, locale, maximumFractionDigits } = useProps(
    'FileSize',
    null,
    _props
  );

  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return null;
  }

  return (
    <>{formatBytes(value, { unit, unitSystem, unitDisplay, locale, maximumFractionDigits })}</>
  );
}

const extendFileSize = (c: ExtendComponent<FileSizeFactory>): MantineThemeComponent => c;

FileSize.extend = extendFileSize;
FileSize.displayName = '@mantine/core/FileSize';

export namespace FileSize {
  export type Props = FileSizeProps;
  export type Factory = FileSizeFactory;
}

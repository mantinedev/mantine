import React from 'react';
import { useDropzone } from 'react-dropzone';
import {
  DefaultProps,
  ClassNames,
  MantineNumberSize,
  mergeStyles,
  useExtractedMargins,
} from '@mantine/core';
import useStyles from './Dropzone.styles';

export type DropzoneStylesNames = ClassNames<typeof useStyles>;

interface DropzoneProps extends DefaultProps<DropzoneStylesNames> {
  /** Padding from theme.spacing, or number to set padding in px */
  padding?: MantineNumberSize;

  /** Border radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Render children based on dragging state */
  children(isDragging?: boolean): React.ReactNode;

  /** Disable files capturing */
  disabled?: boolean;

  /** Called when files are dropped into dropzone */
  onDrop(files: File[]): void;
}

export function Dropzone({
  className,
  padding = 'md',
  radius = 'sm',
  disabled,
  classNames,
  style,
  styles,
  children,
  onDrop,
  ...others
}: DropzoneProps) {
  const { classes, cx } = useStyles({ radius, padding });
  const _styles = mergeStyles(classes, styles);
  const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => onDrop(files),
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={cx(classes.root, { [classes.active]: isDragActive }, className)}
      style={mergedStyles}
      {...rest}
    >
      <input {...getInputProps()} />
      {children(isDragActive)}
    </div>
  );
}

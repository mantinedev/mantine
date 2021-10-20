import React, { forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  DefaultProps,
  ClassNames,
  MantineNumberSize,
  useExtractedMargins,
  LoadingOverlay,
} from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import useStyles from './Dropzone.styles';

export type DropzoneStylesNames = ClassNames<typeof useStyles>;

export interface DropzoneStatus {
  accepted: boolean;
  rejected: boolean;
}

export interface DropzoneProps extends DefaultProps<DropzoneStylesNames> {
  /** Padding from theme.spacing, or number to set padding in px */
  padding?: MantineNumberSize;

  /** Border radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Render children based on dragging state */
  children(status: DropzoneStatus): React.ReactNode;

  /** Disable files capturing */
  disabled?: boolean;

  /** Called when files are dropped into dropzone */
  onDrop(files: File[]): void;

  /** Display loading overlay over dropzone */
  loading?: boolean;

  /** File types to accept  */
  accept?: string[];

  /** Get open function as ref */
  openRef?: React.ForwardedRef<() => void>;

  /** Allow selection of multiple files */
  multiple?: boolean;

  /** Set maximum file size in bytes */
  maxSize?: number;
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      className,
      padding = 'md',
      radius = 'sm',
      disabled,
      classNames,
      style,
      styles,
      loading = false,
      multiple = true,
      maxSize = Infinity,
      accept,
      children,
      onDrop,
      openRef,
      ...others
    }: DropzoneProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { radius, padding },
      { classNames, styles, name: 'Dropzone' }
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
      onDropAccepted: (files) => onDrop(files),
      disabled: disabled || loading,
      accept,
      multiple,
      maxSize,
    });

    assignRef(openRef, open);

    return (
      <div
        {...rest}
        {...getRootProps({ ref })}
        style={mergedStyles}
        className={cx(
          classes.root,
          {
            [classes.active]: isDragAccept,
            [classes.reject]: isDragReject,
            [classes.loading]: loading,
          },
          className
        )}
      >
        <LoadingOverlay visible={loading} radius={radius} />
        <input {...getInputProps()} />
        {children({ accepted: isDragAccept, rejected: isDragReject })}
      </div>
    );
  }
);

Dropzone.displayName = '@mantine/dropzone/Dropzone';

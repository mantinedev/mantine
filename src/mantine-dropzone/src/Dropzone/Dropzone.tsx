import React, { forwardRef } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import {
  DefaultProps,
  Selectors,
  MantineNumberSize,
  LoadingOverlay,
  Box,
  useMantineDefaultProps,
} from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import useStyles from './Dropzone.styles';

export type DropzoneStylesNames = Selectors<typeof useStyles>;

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

  /** Called when selected files don't meet file restrictions */
  onReject?(fileRejections: FileRejection[]): void;

  /** Display loading overlay over dropzone */
  loading?: boolean;

  /** File types to accept  */
  accept?: { [key: string]: string[] } | string[];

  /** Get open function as ref */
  openRef?: React.ForwardedRef<() => void | undefined>;

  /** Allow selection of multiple files */
  multiple?: boolean;

  /** Set maximum file size in bytes */
  maxSize?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  name?: string;
}

const defaultProps: Partial<DropzoneProps> = {
  padding: 'md',
  loading: false,
  multiple: true,
  maxSize: Infinity,
};

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>((props: DropzoneProps, ref) => {
  const {
    className,
    padding,
    radius,
    disabled,
    classNames,
    styles,
    loading,
    multiple,
    maxSize,
    accept,
    children,
    onDrop,
    onReject,
    openRef,
    name,
    ...others
  } = useMantineDefaultProps('Dropzone', defaultProps, props);

  const { classes, cx } = useStyles({ radius, padding }, { classNames, styles, name: 'Dropzone' });

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDropAccepted: (files) => onDrop(files),
    onDropRejected: (fileRejections) => onReject(fileRejections),
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r, key) => ({ ...r, [key]: [] }), {}) : accept,
    multiple,
    maxSize,
  });

  assignRef(openRef, open);

  return (
    <Box
      {...others}
      {...getRootProps({ ref })}
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
      <input {...getInputProps()} name={name} />
      {children({ accepted: isDragAccept, rejected: isDragReject })}
    </Box>
  );
});

Dropzone.displayName = '@mantine/dropzone/Dropzone';

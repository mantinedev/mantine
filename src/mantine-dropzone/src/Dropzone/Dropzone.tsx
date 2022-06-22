import React, { forwardRef } from 'react';
import { useDropzone, FileRejection, Accept } from 'react-dropzone';
import {
  DefaultProps,
  Selectors,
  MantineNumberSize,
  LoadingOverlay,
  Box,
  useComponentDefaultProps,
} from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { DropzoneProvider } from './Dropzone.context';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
import useStyles from './Dropzone.styles';

export type DropzoneStylesNames = Selectors<typeof useStyles>;

export interface DropzoneStatus {
  accepted: boolean;
  rejected: boolean;
}

export interface DropzoneProps
  extends DefaultProps<DropzoneStylesNames>,
    Omit<React.ComponentPropsWithRef<'div'>, 'onDrop'> {
  /** Padding from theme.spacing, or number to set padding in px */
  padding?: MantineNumberSize;

  /** Border radius from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Dropzone statues */
  children: React.ReactNode;

  /** Disable files capturing */
  disabled?: boolean;

  /** Called when files are dropped into dropzone */
  onDrop(files: File[]): void;

  /** Called when selected files don't meet file restrictions */
  onReject?(fileRejections: FileRejection[]): void;

  /** Display loading overlay over dropzone */
  loading?: boolean;

  /** File types to accept  */
  accept?: Accept | string[];

  /** Get open function as ref */
  openRef?: React.ForwardedRef<() => void | undefined>;

  /** Allow selection of multiple files */
  multiple?: boolean;

  /** Set maximum file size in bytes */
  maxSize?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  name?: string;

  /** Number of files that user can pick */
  maxFiles?: number;
}

const defaultProps: Partial<DropzoneProps> = {
  padding: 'md',
  loading: false,
  multiple: true,
  maxSize: Infinity,
};

const _Dropzone: any = forwardRef<HTMLDivElement, DropzoneProps>((props: DropzoneProps, ref) => {
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
    unstyled,
    maxFiles,
    ...others
  } = useComponentDefaultProps('Dropzone', defaultProps, props);

  const { classes, cx } = useStyles(
    { radius, padding },
    { classNames, styles, unstyled, name: 'Dropzone' }
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDropAccepted: onDrop,
    onDropRejected: onReject,
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r, key) => ({ ...r, [key]: [] }), {}) : accept,
    multiple,
    maxSize,
    maxFiles,
  });

  assignRef(openRef, open);

  const isIdle = !isDragAccept && !isDragReject;

  return (
    <DropzoneProvider value={{ accept: isDragAccept, reject: isDragReject, idle: isIdle }}>
      <Box
        {...others}
        {...getRootProps({ ref })}
        data-accept={isDragAccept || undefined}
        data-reject={isDragReject || undefined}
        data-idle={isIdle || undefined}
        data-loading={loading || undefined}
        className={cx(classes.root, className)}
      >
        <LoadingOverlay visible={loading} radius={radius} unstyled={unstyled} />
        <input {...getInputProps()} name={name} />
        <div className={classes.inner}>{children}</div>
      </Box>
    </DropzoneProvider>
  );
});

_Dropzone.displayName = '@mantine/dropzone/Dropzone';
_Dropzone.Accept = DropzoneAccept;
_Dropzone.Reject = DropzoneReject;
_Dropzone.Idle = DropzoneIdle;

export const Dropzone: ForwardRefWithStaticComponents<
  DropzoneProps,
  {
    Accept: typeof DropzoneAccept;
    Reject: typeof DropzoneReject;
    Idle: typeof DropzoneIdle;
  }
> = _Dropzone;

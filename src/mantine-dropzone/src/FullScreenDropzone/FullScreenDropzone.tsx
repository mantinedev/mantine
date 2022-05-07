import React, { useState } from 'react';
import {
  Portal,
  Transition,
  MantineNumberSize,
  Selectors,
  DefaultProps,
  Box,
  useMantineDefaultProps,
} from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import { DropzoneStatus } from '../Dropzone';
import useStyles from './FullscreenDropzone.styles';

export type FullScreenDropzoneStylesNames = Selectors<typeof useStyles>;

export interface FullScreenDropzoneProps
  extends DefaultProps<FullScreenDropzoneStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrop'> {
  /** Space between dropzone and viewport edges */
  offset?: MantineNumberSize;

  /** Overlay z-index */
  zIndex?: number;

  /** Disable dropzone */
  disabled?: boolean;

  /** Accepted mime types */
  accept: string[];

  /** Dropzone padding from theme or number to set padding in px */
  padding?: MantineNumberSize;

  /** Dropzone radius from theme or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Called when files are dropped to document */
  onDrop(files: File[]): void;

  /** Render children based on dragging state */
  children(status: DropzoneStatus): React.ReactNode;
}

function isVisible(event: DragEvent) {
  for (let i = 0; i < event.dataTransfer.items.length; i += 1) {
    if (event.dataTransfer.items[i].kind !== 'file') {
      return false;
    }
  }

  return true;
}

function isValidDrop(event: DragEvent, mime: string[]) {
  const items = event?.dataTransfer?.items;

  if (mime.includes('*')) {
    return true;
  }

  for (let i = 0; i < items?.length; i += 1) {
    if (!mime.includes(items[i].type)) {
      return false;
    }
  }

  return true;
}

const defaultProps: Partial<FullScreenDropzoneProps> = {
  offset: 'xl',
  padding: 'md',
  accept: ['*'],
  zIndex: 1000,
};

export function FullScreenDropzone(props: FullScreenDropzoneProps) {
  const {
    className,
    style,
    offset,
    padding,
    radius,
    classNames,
    styles,
    disabled,
    accept,
    zIndex,
    onDrop,
    children,
    ...others
  } = useMantineDefaultProps('FullScreenDropzone', defaultProps, props);

  const { classes, cx } = useStyles(
    { offset, padding, radius },
    { classNames, styles, name: 'FullScreenDropzone' }
  );
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setError(!isValidDrop(event, accept));
    setVisible(isVisible(event));
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setVisible(false);
  };

  const handleDrop = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setVisible(false);
    if (isValidDrop(event, accept)) {
      onDrop(Array.from(event.dataTransfer.files));
    }
  };

  useIsomorphicEffect(() => {
    if (!disabled) {
      document.addEventListener('dragover', handleDragOver, false);
      document.addEventListener('dragleave', handleDragLeave, false);
      document.addEventListener('drop', handleDrop, false);

      return () => {
        document.removeEventListener('dragover', handleDragOver, false);
        document.removeEventListener('dragleave', handleDragLeave, false);
        document.removeEventListener('drop', handleDrop, false);
      };
    }

    return undefined;
  }, [disabled]);

  return (
    <Portal zIndex={zIndex}>
      <Transition
        transition="fade"
        duration={200}
        timingFunction="ease"
        mounted={visible && !disabled}
      >
        {(transitionStyles) => (
          <Box
            style={{ ...style, ...transitionStyles }}
            className={cx(classes.root, className)}
            {...others}
          >
            <div
              className={cx(
                classes.dropzone,
                {
                  [classes.active]: visible && !error,
                  [classes.reject]: error,
                },
                className
              )}
            >
              {children({ accepted: visible && !error, rejected: error })}
            </div>
          </Box>
        )}
      </Transition>
    </Portal>
  );
}

FullScreenDropzone.displayName = '@mantine/dropzone/FullScreenDropzone';

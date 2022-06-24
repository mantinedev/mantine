import React, { forwardRef, useEffect } from 'react';
import {
  Box,
  useComponentDefaultProps,
  OptionalPortal,
  DefaultProps,
  Selectors,
  getDefaultZIndex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DropzoneStylesNames, DropzoneProps, _Dropzone } from './Dropzone';
import useFullScreenStyles from './DropzoneFullScreen.styles';

export type DropzoneFullScreenStylesName =
  | DropzoneStylesNames
  | Exclude<Selectors<typeof useFullScreenStyles>, 'dropzone'>;

export interface DropzoneFullScreenProps
  extends Omit<DropzoneProps, 'styles' | 'classNames'>,
    DefaultProps<DropzoneFullScreenStylesName> {
  /** Determines whether user can drop files to browser window, true by default */
  active?: boolean;

  /** z-index value, 9999 by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Determines whether component should be rendered within Portal, true by default */
  withinPortal?: boolean;
}

const fullScreenDefaultProps: Partial<DropzoneFullScreenProps> = {
  padding: 'md',
  loading: false,
  multiple: true,
  maxSize: Infinity,
  autoFocus: false,
  activateOnClick: true,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  active: true,
  zIndex: getDefaultZIndex('max'),
  withinPortal: true,
};

export const DropzoneFullScreen = forwardRef<HTMLDivElement, DropzoneFullScreenProps>(
  (props, ref) => {
    const {
      classNames,
      styles,
      sx,
      className,
      style,
      unstyled,
      active,
      onDrop,
      onReject,
      onDragLeave,
      zIndex,
      withinPortal,
      ...others
    } = useComponentDefaultProps('DropzoneFullScreen', fullScreenDefaultProps, props);

    const [visible, { open, close }] = useDisclosure(false);
    const { classes, cx } = useFullScreenStyles(null, {
      name: 'DropzoneFullScreen',
      classNames,
      styles,
      unstyled,
    });

    useEffect(() => {
      if (active) {
        document.addEventListener('dragover', open, false);
        return () => document.removeEventListener('dragover', open, false);
      }

      return undefined;
    }, [active]);

    return (
      <OptionalPortal withinPortal={withinPortal}>
        <Box
          className={cx(classes.wrapper, className)}
          sx={sx}
          style={{
            ...style,
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? 'all' : 'none',
            zIndex,
          }}
        >
          <_Dropzone
            {...others}
            classNames={classNames}
            styles={styles}
            unstyled={unstyled}
            ref={ref}
            className={classes.dropzone}
            onDrop={(files: any) => {
              onDrop?.(files);
              close();
            }}
            onReject={(files: any) => {
              onReject?.(files);
              close();
            }}
            onDragLeave={(event: any) => {
              onDragLeave?.(event);
              close();
            }}
          />
        </Box>
      </OptionalPortal>
    );
  }
);

DropzoneFullScreen.displayName = '@mantine/dropzone/DropzoneFullScreen';

export type DropzoneFullScreenType = typeof DropzoneFullScreen;

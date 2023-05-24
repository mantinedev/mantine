import React, { useEffect } from 'react';
import {
  Box,
  useComponentDefaultProps,
  OptionalPortal,
  DefaultProps,
  Selectors,
  getDefaultZIndex,
  PortalProps,
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

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, 'children' | 'withinPortal'>;
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

export function DropzoneFullScreen(props: DropzoneFullScreenProps) {
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
    zIndex,
    withinPortal,
    portalProps,
    ...others
  } = useComponentDefaultProps('DropzoneFullScreen', fullScreenDefaultProps, props);

  const [counter, setCounter] = React.useState(0);
  const [visible, { open, close }] = useDisclosure(false);
  const { classes, cx } = useFullScreenStyles(null, {
    name: 'DropzoneFullScreen',
    classNames,
    styles,
    unstyled,
  });

  const handleDragEnter = (event: DragEvent) => {
    if (event.dataTransfer.types.includes('Files')) {
      setCounter((prev) => prev + 1);
      open();
    }
  };

  const handleDragLeave = () => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    counter === 0 && close();
  }, [counter]);

  useEffect(() => {
    if (!active) return undefined;

    document.addEventListener('dragenter', handleDragEnter, false);
    document.addEventListener('dragleave', handleDragLeave, false);

    return () => {
      document.removeEventListener('dragenter', handleDragEnter, false);
      document.removeEventListener('dragleave', handleDragLeave, false);
    };
  }, [active]);

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
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
          className={classes.dropzone}
          onDrop={(files: any) => {
            onDrop?.(files);
            close();
          }}
          onReject={(files: any) => {
            onReject?.(files);
            close();
          }}
        />
      </Box>
    </OptionalPortal>
  );
}

DropzoneFullScreen.displayName = '@mantine/dropzone/DropzoneFullScreen';

export type DropzoneFullScreenType = typeof DropzoneFullScreen;

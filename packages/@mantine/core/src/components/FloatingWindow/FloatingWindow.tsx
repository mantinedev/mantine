import { useImperativeHandle, useRef } from 'react';
import {
  SetFloatingWindowPosition,
  useFloatingWindow,
  UseFloatingWindowOptions,
  useMergedRef,
} from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  getDefaultZIndex,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Paper, PaperBaseProps } from '../Paper';
import { OptionalPortal, PortalProps } from '../Portal';
import {
  FloatingWindowDimensions,
  FloatingWindowProvider,
  FloatingWindowSize,
} from './FloatingWindow.context';
import { FloatingWindowResizeHandle } from './FloatingWindowResizeHandle';
import classes from './FloatingWindow.module.css';

export type FloatingWindowStylesNames = 'root';

export interface FloatingWindowProps
  extends
    UseFloatingWindowOptions,
    PaperBaseProps,
    BoxProps,
    StylesApiProps<FloatingWindowFactory>,
    ElementProps<'div', keyof UseFloatingWindowOptions> {
  /** Assigns ref to set position programmatically */
  setPositionRef?: React.RefObject<SetFloatingWindowPosition | null>;

  /** Determines whether the window should be rendered inside `Portal` @default true */
  withinPortal?: boolean;

  /** Props passed down to `Portal` component */
  portalProps?: Omit<PortalProps, 'children'>;

  /** `z-index` of the root element @default 400 */
  zIndex?: React.CSSProperties['zIndex'];

  /** Dimensions configuration for resizable floating window */
  dimensions?: FloatingWindowDimensions;

  /** Called when the window is resized with `FloatingWindow.ResizeHandle` */
  onSizeChange?: (size: FloatingWindowSize) => void;

  /** Called when the resize with `FloatingWindow.ResizeHandle` starts. Not called for keyboard resize. */
  onResizeStart?: () => void;

  /** Called when the resize with `FloatingWindow.ResizeHandle` stops. Not called for keyboard resize. */
  onResizeEnd?: () => void;
}

export type FloatingWindowFactory = Factory<{
  props: FloatingWindowProps;
  ref: HTMLDivElement;
  stylesNames: FloatingWindowStylesNames;
  staticComponents: {
    ResizeHandle: typeof FloatingWindowResizeHandle;
  };
}>;

const defaultProps = {
  constrainToViewport: true,
  zIndex: getDefaultZIndex('overlay'),
} satisfies Partial<FloatingWindowProps>;

function clampDimension(value: number, min?: number, max?: number): number {
  let v = value;
  if (min != null) {
    v = Math.max(v, min);
  }
  if (max != null) {
    v = Math.min(v, max);
  }
  return v;
}

export const FloatingWindow = factory<FloatingWindowFactory>((_props) => {
  const props = useProps('FloatingWindow', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    mod,
    enabled,
    constrainToViewport,
    constrainOffset,
    dragHandleSelector,
    excludeDragHandleSelector,
    axis,
    initialPosition,
    onPositionChange,
    onDragStart,
    onDragEnd,
    setPositionRef,
    withinPortal,
    portalProps,
    zIndex,
    dimensions,
    onSizeChange,
    onResizeStart,
    onResizeEnd,
    ref,
    ...others
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);

  const getStyles = useStyles<FloatingWindowFactory>({
    name: 'FloatingWindow',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const floatingWindow = useFloatingWindow({
    enabled,
    constrainToViewport,
    constrainOffset,
    dragHandleSelector,
    excludeDragHandleSelector,
    axis,
    initialPosition,
    onPositionChange,
    onDragStart,
    onDragEnd,
  });

  useImperativeHandle(setPositionRef, () => floatingWindow.setPosition, [
    floatingWindow.setPosition,
  ]);

  const cssVars: Record<string, string | undefined> = {
    '--floating-window-z-index': zIndex.toString(),
  };

  if (dimensions?.initialWidth != null) {
    cssVars['--floating-window-width'] =
      `${clampDimension(dimensions.initialWidth, dimensions.minWidth, dimensions.maxWidth)}px`;
  }

  if (dimensions?.initialHeight != null) {
    cssVars['--floating-window-height'] =
      `${clampDimension(dimensions.initialHeight, dimensions.minHeight, dimensions.maxHeight)}px`;
  }

  return (
    <FloatingWindowProvider
      value={{
        rootRef,
        dimensions,
        constrainToViewport,
        constrainOffset,
        onSizeChange,
        onResizeStart,
        onResizeEnd,
      }}
    >
      <OptionalPortal withinPortal={withinPortal} {...portalProps}>
        <Paper
          ref={useMergedRef(ref, floatingWindow.ref, rootRef)}
          mod={[{ dragging: floatingWindow.isDragging }, mod]}
          {...getStyles('root')}
          {...others}
          __vars={cssVars}
        />
      </OptionalPortal>
    </FloatingWindowProvider>
  );
});

FloatingWindow.displayName = '@mantine/core/FloatingWindow';
FloatingWindow.classes = classes;
FloatingWindow.ResizeHandle = FloatingWindowResizeHandle;

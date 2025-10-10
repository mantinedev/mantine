import { useImperativeHandle } from 'react';
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
import classes from './FloatingWindow.module.css';

export type FloatingWindowStylesNames = 'root';

export interface FloatingWindowProps
  extends UseFloatingWindowOptions,
    PaperBaseProps,
    BoxProps,
    StylesApiProps<FloatingWindowFactory>,
    ElementProps<'div', keyof UseFloatingWindowOptions> {
  /** Assigns ref to set position programmatically */
  setPositionRef?: React.RefObject<SetFloatingWindowPosition | null>;

  /** Determines whether the window should be rendered inside `Portal` @default `true` */
  withinPortal?: boolean;

  /** Props passed down to `Portal` component */
  portalProps?: Omit<PortalProps, 'children'>;

  /** `z-index` of the root element @default `400` */
  zIndex?: React.CSSProperties['zIndex'];
}

export type FloatingWindowFactory = Factory<{
  props: FloatingWindowProps;
  ref: HTMLDivElement;
  stylesNames: FloatingWindowStylesNames;
}>;

const defaultProps = {
  constrainToViewport: true,
  zIndex: getDefaultZIndex('overlay'),
} satisfies Partial<FloatingWindowProps>;

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
    ref,
    ...others
  } = props;

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

  return (
    <OptionalPortal withinPortal={withinPortal} {...portalProps}>
      <Paper
        ref={useMergedRef(ref, floatingWindow.ref)}
        mod={[{ dragging: floatingWindow.isDragging }, mod]}
        {...getStyles('root')}
        {...others}
        __vars={{ '--floating-window-z-index': zIndex.toString() }}
      />
    </OptionalPortal>
  );
});

FloatingWindow.displayName = '@mantine/core/FloatingWindow';
FloatingWindow.classes = classes;

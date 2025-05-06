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
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Paper, PaperBaseProps } from '../Paper';
import classes from './FloatingWindow.module.css';

export type FloatingWindowStylesNames = 'root';

export interface FloatingWindowProps
  extends UseFloatingWindowOptions,
    PaperBaseProps,
    BoxProps,
    StylesApiProps<FloatingWindowFactory>,
    ElementProps<'div', keyof UseFloatingWindowOptions> {
  /** Assigns ref to set position programmatically */
  setPositionRef?: React.RefObject<SetFloatingWindowPosition>;
}

export type FloatingWindowFactory = Factory<{
  props: FloatingWindowProps;
  ref: HTMLDivElement;
  stylesNames: FloatingWindowStylesNames;
}>;

const defaultProps: Partial<FloatingWindowProps> = {
  constrainToViewport: true,
};

export const FloatingWindow = factory<FloatingWindowFactory>((_props, ref) => {
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
    <Paper
      ref={useMergedRef(ref, floatingWindow.ref)}
      mod={[{ dragging: floatingWindow.isDragging }, mod]}
      {...getStyles('root')}
      {...others}
    />
  );
});

FloatingWindow.displayName = '@mantine/core/FloatingWindow';
FloatingWindow.classes = classes;

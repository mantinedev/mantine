import { cloneElement } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  createVarsResolver,
  factory,
  Factory,
  getDefaultZIndex,
  getRadius,
  getRefProp,
  getSingleElementChild,
  getStyleObject,
  getThemeColor,
  useMantineTheme,
  useProps,
  useStyles,
} from '../../../core';
import { OptionalPortal } from '../../Portal';
import { TooltipBaseProps, TooltipCssVariables, TooltipStylesNames } from '../Tooltip.types';
import { useFloatingTooltip } from './use-floating-tooltip';
import classes from '../Tooltip.module.css';

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px @default `10` */
  offset?: number;

  /** Uncontrolled tooltip initial opened state */
  defaultOpened?: boolean;
}

export type TooltipFloatingFactory = Factory<{
  props: TooltipFloatingProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
}>;

const defaultProps = {
  refProp: 'ref',
  withinPortal: true,
  offset: 10,
  position: 'right',
  zIndex: getDefaultZIndex('popover'),
} satisfies Partial<TooltipFloatingProps>;

const varsResolver = createVarsResolver<TooltipFloatingFactory>((theme, { radius, color }) => ({
  tooltip: {
    '--tooltip-radius': radius === undefined ? undefined : getRadius(radius),
    '--tooltip-bg': color ? getThemeColor(color, theme) : undefined,
    '--tooltip-color': color ? 'var(--mantine-color-white)' : undefined,
  },
}));

export const TooltipFloating = factory<TooltipFloatingFactory>((_props, ref) => {
  const props = useProps('TooltipFloating', defaultProps, _props);
  const {
    children,
    refProp,
    withinPortal,
    style,
    className,
    classNames,
    styles,
    unstyled,
    radius,
    color,
    label,
    offset,
    position,
    multiline,
    zIndex,
    disabled,
    defaultOpened,
    variant,
    vars,
    portalProps,
    attributes,
    ...others
  } = props;

  const theme = useMantineTheme();
  const getStyles = useStyles<TooltipFloatingFactory>({
    name: 'TooltipFloating',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'tooltip',
    vars,
    varsResolver,
  });

  const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } = useFloatingTooltip({
    offset,
    position,
    defaultOpened,
  });

  const child = getSingleElementChild(children);
  if (!child) {
    throw new Error(
      '[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const targetRef = useMergedRef(boundaryRef, getRefProp(child), ref);
  const childProps = child.props as any;

  const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
    childProps.onMouseEnter?.(event);
    handleMouseMove(event);
    setOpened(true);
  };

  const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
    childProps.onMouseLeave?.(event);
    setOpened(false);
  };

  return (
    <>
      <OptionalPortal {...portalProps} withinPortal={withinPortal}>
        <Box
          {...others}
          {...getStyles('tooltip', {
            style: {
              ...getStyleObject(style, theme),
              zIndex: zIndex as React.CSSProperties['zIndex'],
              display: !disabled && opened ? 'block' : 'none',
              top: (y && Math.round(y)) ?? '',
              left: (x && Math.round(x)) ?? '',
            },
          })}
          variant={variant}
          ref={floating}
          mod={{ multiline }}
        >
          {label}
        </Box>
      </OptionalPortal>

      {cloneElement(child, {
        ...childProps,
        [refProp]: targetRef,
        onMouseEnter,
        onMouseLeave,
      })}
    </>
  );
});

TooltipFloating.classes = classes;
TooltipFloating.displayName = '@mantine/core/TooltipFloating';

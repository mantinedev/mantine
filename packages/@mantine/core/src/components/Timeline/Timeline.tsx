import { Children, cloneElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TimelineProvider } from './Timeline.context';
import { TimelineItem, TimelineItemStylesNames } from './TimelineItem/TimelineItem';
import classes from './Timeline.module.css';

export type TimelineStylesNames = 'root' | TimelineItemStylesNames;
export type TimelineCssVariables = {
  root: '--tl-line-width' | '--tl-bullet-size' | '--tl-color' | '--tl-icon-color' | '--tl-radius';
};

export interface TimelineProps
  extends BoxProps,
    StylesApiProps<TimelineFactory>,
    ElementProps<'div'> {
  /** `Timeline.Item` components */
  children?: React.ReactNode;

  /** Index of the active element */
  active?: number;

  /**
   * Key of `theme.colors` or any valid CSS color to control active item colors
   *
   * @default `theme.primaryColor`
   */
  color?: MantineColor;

  /**
   * Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem
   *
   * @default `'xl'`
   */
  radius?: MantineRadius;

  /**
   * Size of the bullet
   *
   * @default `20`
   */
  bulletSize?: number | string;

  /**
   * Position of content relative to the bullet
   *
   * @default `'left'`
   */
  align?: 'right' | 'left';

  /** Control width of the line */
  lineWidth?: number | string;

  /**
   * If set, the active items direction is reversed without reversing items order
   *
   * @default `false`
   */
  reverseActive?: boolean;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type TimelineFactory = Factory<{
  props: TimelineProps;
  ref: HTMLDivElement;
  stylesNames: TimelineStylesNames;
  vars: TimelineCssVariables;
  staticComponents: {
    Item: typeof TimelineItem;
  };
}>;

const defaultProps = {
  active: -1,
  align: 'left',
} satisfies Partial<TimelineProps>;

const varsResolver = createVarsResolver<TimelineFactory>(
  (theme, { bulletSize, lineWidth, radius, color, autoContrast }) => ({
    root: {
      '--tl-bullet-size': rem(bulletSize),
      '--tl-line-width': rem(lineWidth),
      '--tl-radius': radius === undefined ? undefined : getRadius(radius),
      '--tl-color': color ? getThemeColor(color, theme) : undefined,
      '--tl-icon-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
    },
  })
);

export const Timeline = factory<TimelineFactory>((_props, ref) => {
  const props = useProps('Timeline', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive,
    mod,
    autoContrast,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<TimelineFactory>({
    name: 'Timeline',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const _children = Children.toArray(children);
  const items = _children.map((item: any, index) =>
    cloneElement(item, {
      unstyled,
      __align: align,
      __active:
        item.props?.active ||
        (reverseActive ? active >= _children.length - index - 1 : active >= index),
      __lineActive:
        item.props?.lineActive ||
        (reverseActive ? active >= _children.length - index - 1 : active - 1 >= index),
    })
  );

  return (
    <TimelineProvider value={{ getStyles }}>
      <Box {...getStyles('root')} mod={[{ align }, mod]} ref={ref} {...others}>
        {items}
      </Box>
    </TimelineProvider>
  );
});

Timeline.classes = classes;
Timeline.displayName = '@mantine/core/Timeline';
Timeline.Item = TimelineItem;

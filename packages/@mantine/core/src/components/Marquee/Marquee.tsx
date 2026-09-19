import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import classes from './Marquee.module.css';

export type MarqueeStylesNames = 'root' | 'content' | 'group';
export type MarqueeCssVariables = {
  root:
    | '--marquee-duration'
    | '--marquee-gap'
    | '--marquee-repeat'
    | '--marquee-fade-color'
    | '--marquee-fade-size';
};

export interface MarqueeProps
  extends BoxProps, StylesApiProps<MarqueeFactory>, ElementProps<'div'> {
  /** Reverses animation direction @default false @category appearance */
  reverse?: boolean;

  /** Pauses animation on hover @default false @category behavior */
  pauseOnHover?: boolean;

  /** Content to scroll @category appearance */
  children: React.ReactNode;

  /** Scroll orientation @default 'horizontal' @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** Number of times children are repeated inline for seamless scrolling @default 4 @category appearance */
  repeat?: number;

  /** Animation duration in ms @default 40000 @category appearance */
  duration?: number;

  /** Gap between repeated children, key of `theme.spacing` or any valid CSS value @default 'md' @category appearance */
  gap?: MantineSpacing;

  /** Whether to show gradient fade on edges, @default true @category appearance */
  fadeEdges?: boolean;

  /** Color of the fade gradient, @default 'var(--mantine-color-body)' @category appearance */
  fadeEdgeColor?: string;

  /** Size of the fade gradient, @default '5%' @category appearance */
  fadeEdgeSize?: string;
}

export type MarqueeFactory = Factory<{
  props: MarqueeProps;
  ref: HTMLDivElement;
  stylesNames: MarqueeStylesNames;
  vars: MarqueeCssVariables;
}>;

const defaultProps = {
  repeat: 4,
  duration: 100_000,
  orientation: 'horizontal',
  fadeEdges: true,
} satisfies Partial<MarqueeProps>;

const varsResolver = createVarsResolver<MarqueeFactory>(
  (_, { duration, gap, repeat, fadeEdgeColor, fadeEdgeSize }) => ({
    root: {
      '--marquee-duration': `${duration}ms`,
      '--marquee-gap': getSpacing(gap),
      '--marquee-repeat': (repeat ?? 4).toString(),
      '--marquee-fade-color': fadeEdgeColor,
      '--marquee-fade-size': fadeEdgeSize,
    },
  })
);

export const Marquee = factory<MarqueeFactory>((_props) => {
  const props = useProps('Marquee', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    reverse,
    pauseOnHover,
    orientation,
    repeat,
    duration,
    gap,
    fadeEdges,
    fadeEdgeColor,
    fadeEdgeSize,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<MarqueeFactory>({
    name: 'Marquee',
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

  const repeatedChildren = Array(repeat)
    .fill(0)
    .map((_, index) => (
      <div key={index} {...getStyles('group')}>
        {children}
      </div>
    ));

  return (
    <Box
      {...getStyles('root')}
      mod={[{ orientation, reverse, pauseOnHover, 'fade-edges': fadeEdges }, mod]}
      {...others}
    >
      <div {...getStyles('content')}>{repeatedChildren}</div>
    </Box>
  );
});

Marquee.classes = classes;
Marquee.varsResolver = varsResolver;
Marquee.displayName = '@mantine/core/Marquee';

export namespace Marquee {
  export type Props = MarqueeProps;
  export type StylesNames = MarqueeStylesNames;
  export type CssVariables = MarqueeCssVariables;
  export type Factory = MarqueeFactory;
}

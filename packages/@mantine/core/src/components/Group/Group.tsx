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
import { filterFalsyChildren } from './filter-falsy-children/filter-falsy-children';
import classes from './Group.module.css';

export type GroupStylesNames = 'root';
export type GroupCssVariables = {
  root:
    | '--group-gap'
    | '--group-align'
    | '--group-justify'
    | '--group-wrap'
    | '--group-child-width';
};

export interface GroupStylesCtx {
  childWidth: string;
}

export interface GroupProps extends BoxProps, StylesApiProps<GroupFactory>, ElementProps<'div'> {
  __size?: any;

  /** Controls `justify-content` CSS property @default 'flex-start' */
  justify?: React.CSSProperties['justifyContent'];

  /** Controls `align-items` CSS property @default 'center' */
  align?: React.CSSProperties['alignItems'];

  /** Controls `flex-wrap` CSS property @default 'wrap' */
  wrap?: React.CSSProperties['flexWrap'];

  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem @default 'md' */
  gap?: MantineSpacing;

  /** Determines whether each child element should have `flex-grow: 1` style @default false */
  grow?: boolean;

  /** Determines whether children should take only dedicated amount of space (`max-width` style is set based on the number of children) @default true */
  preventGrowOverflow?: boolean;
}

export type GroupFactory = Factory<{
  props: GroupProps;
  ref: HTMLDivElement;
  stylesNames: GroupStylesNames;
  vars: GroupCssVariables;
  ctx: GroupStylesCtx;
}>;

const defaultProps = {
  preventGrowOverflow: true,
  gap: 'md',
  align: 'center',
  justify: 'flex-start',
  wrap: 'wrap',
} satisfies Partial<GroupProps>;

const varsResolver = createVarsResolver<GroupFactory>(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    root: {
      '--group-child-width': grow && preventGrowOverflow ? childWidth : undefined,
      '--group-gap': getSpacing(gap),
      '--group-align': align,
      '--group-justify': justify,
      '--group-wrap': wrap,
    },
  })
);

export const Group = factory<GroupFactory>((_props) => {
  const props = useProps('Group', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    __size,
    mod,
    attributes,
    ...others
  } = props;

  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const resolvedGap = getSpacing(gap ?? 'md');
  const childWidth = `calc(${
    100 / childrenCount
  }% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`;

  const stylesCtx: GroupStylesCtx = { childWidth };

  const getStyles = useStyles<GroupFactory>({
    name: 'Group',
    props,
    stylesCtx,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return (
    <Box {...getStyles('root')} variant={variant} mod={[{ grow }, mod]} size={__size} {...others}>
      {filteredChildren}
    </Box>
  );
});

Group.classes = classes;
Group.displayName = '@mantine/core/Group';

import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  MantineSpacing,
  StyleProp,
  StylesApiProps,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import { GridBreakpoints, GridProvider } from './Grid.context';
import { GridCol } from './GridCol/GridCol';
import { GridVariables } from './GridVariables';
import classes from './Grid.module.css';

export type GridStylesNames = 'root' | 'col' | 'inner' | 'container';
export type GridCssVariables = {
  root: '--grid-justify' | '--grid-align' | '--grid-overflow';
};

export interface GridProps extends BoxProps, StylesApiProps<GridFactory>, ElementProps<'div'> {
  /** Gutter between columns, key of `theme.spacing` or any valid CSS value @default `'md'` */
  gutter?: StyleProp<MantineSpacing>;

  /** If set, columns in the last row expand to fill all available space @default `false` */
  grow?: boolean;

  /** Sets `justify-content` @default `flex-start` */
  justify?: React.CSSProperties['justifyContent'];

  /** Sets `align-items` @default `stretch` */
  align?: React.CSSProperties['alignItems'];

  /** Number of columns in each row @default `12` */
  columns?: number;

  /** Sets `overflow` CSS property on the root element @default `'visible'` */
  overflow?: React.CSSProperties['overflow'];

  /** Type of queries used for responsive styles @default `'media'` */
  type?: 'media' | 'container';

  /** Breakpoints values, only used with `type="container"` */
  breakpoints?: GridBreakpoints;
}

export type GridFactory = Factory<{
  props: GridProps;
  ref: HTMLDivElement;
  stylesNames: GridStylesNames;
  vars: GridCssVariables;
  staticComponents: {
    Col: typeof GridCol;
  };
}>;

const defaultProps = {
  gutter: 'md',
  grow: false,
  columns: 12,
} satisfies Partial<GridProps>;

const varsResolver = createVarsResolver<GridFactory>((_, { justify, align, overflow }) => ({
  root: {
    '--grid-justify': justify,
    '--grid-align': align,
    '--grid-overflow': overflow,
  },
}));

export const Grid = factory<GridFactory>((_props, ref) => {
  const props = useProps('Grid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children,
    breakpoints,
    type,
    ...others
  } = props;

  const getStyles = useStyles<GridFactory>({
    name: 'Grid',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const responsiveClassName = useRandomClassName();

  if (type === 'container' && breakpoints) {
    return (
      <GridProvider value={{ getStyles, grow, columns, breakpoints, type }}>
        <GridVariables selector={`.${responsiveClassName}`} {...props} />
        <div {...getStyles('container')}>
          <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others}>
            <div {...getStyles('inner')}>{children}</div>
          </Box>
        </div>
      </GridProvider>
    );
  }

  return (
    <GridProvider value={{ getStyles, grow, columns, breakpoints, type }}>
      <GridVariables selector={`.${responsiveClassName}`} {...props} />
      <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others}>
        <div {...getStyles('inner')}>{children}</div>
      </Box>
    </GridProvider>
  );
});

Grid.classes = classes;
Grid.displayName = '@mantine/core/Grid';
Grid.Col = GridCol;

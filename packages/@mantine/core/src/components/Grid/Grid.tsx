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
import { GridProvider } from './Grid.context';
import { GridCol } from './GridCol/GridCol';
import { GridVariables } from './GridVariables';
import classes from './Grid.module.css';

export type GridStylesNames = 'root' | 'col' | 'inner';
export type GridCssVariables = {
  root: '--grid-justify' | '--grid-align' | '--grid-overflow';
};

export interface GridProps extends BoxProps, StylesApiProps<GridFactory>, ElementProps<'div'> {
  /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
  gutter?: StyleProp<MantineSpacing>;

  /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
  grow?: boolean;

  /** Sets `justify-content`, `flex-start` by default */
  justify?: React.CSSProperties['justifyContent'];

  /** Sets `align-items`, `stretch` by default */
  align?: React.CSSProperties['alignItems'];

  /** Number of columns in each row, `12` by default */
  columns?: number;

  /** Sets `overflow` CSS property on the root element, `'visible'` by default */
  overflow?: React.CSSProperties['overflow'];
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

const defaultProps: Partial<GridProps> = {
  gutter: 'md',
  grow: false,
  columns: 12,
};

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

  return (
    <GridProvider value={{ getStyles, grow, columns: columns! }}>
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

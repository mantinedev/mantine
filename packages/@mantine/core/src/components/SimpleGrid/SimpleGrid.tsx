import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  MantineSpacing,
  StyleProp,
  StylesApiProps,
  useProps,
  useRandomClassName,
  useStyles,
} from '../../core';
import classes from './SimpleGrid.module.css';
import { SimpleGridContainerVariables, SimpleGridMediaVariables } from './SimpleGridVariables';

export type SimpleGridStylesNames = 'root' | 'container';

export interface SimpleGridProps
  extends BoxProps, StylesApiProps<SimpleGridFactory>, ElementProps<'div'> {
  /** Number of columns @default 1 */
  cols?: StyleProp<number>;

  /** Spacing between columns @default 'md' */
  spacing?: StyleProp<MantineSpacing>;

  /** Spacing between rows. When not set, falls back to spacing value @default undefined */
  verticalSpacing?: StyleProp<MantineSpacing>;

  /** Determines type of queries that are used for responsive styles @default 'media' */
  type?: 'media' | 'container';

  /** Minimum column width when using auto-fit/auto-fill. When set, cols prop is ignored */
  minColWidth?: string | number;

  /** Grid repeat type when minColWidth is set @default 'auto-fill' */
  autoFlow?: 'auto-fit' | 'auto-fill';

  /** Sets the size of implicitly created grid rows */
  autoRows?: string;
}

export type SimpleGridFactory = Factory<{
  props: SimpleGridProps;
  ref: HTMLDivElement;
  stylesNames: SimpleGridStylesNames;
}>;

const defaultProps = {
  cols: 1,
  spacing: 'md',
  type: 'media',
} satisfies Partial<SimpleGridProps>;

export const SimpleGrid = factory<SimpleGridFactory>((_props) => {
  const props = useProps('SimpleGrid', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing,
    type,
    minColWidth,
    autoFlow,
    autoRows,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<SimpleGridFactory>({
    name: 'SimpleGrid',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const responsiveClassName = useRandomClassName();

  const autoColsAttr = minColWidth !== undefined ? autoFlow || 'auto-fill' : undefined;

  if (type === 'container') {
    return (
      <>
        <SimpleGridContainerVariables {...props} selector={`.${responsiveClassName}`} />
        <div {...getStyles('container')}>
          <Box
            {...getStyles('root', { className: responsiveClassName })}
            {...others}
            data-auto-cols={autoColsAttr}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <SimpleGridMediaVariables {...props} selector={`.${responsiveClassName}`} />
      <Box
        {...getStyles('root', { className: responsiveClassName })}
        {...others}
        data-auto-cols={autoColsAttr}
      />
    </>
  );
});

SimpleGrid.classes = classes;
SimpleGrid.displayName = '@mantine/core/SimpleGrid';

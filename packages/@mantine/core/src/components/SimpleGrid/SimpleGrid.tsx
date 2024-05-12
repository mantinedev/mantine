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
import { SimpleGridContainerVariables, SimpleGridMediaVariables } from './SimpleGridVariables';
import classes from './SimpleGrid.module.css';

export type SimpleGridStylesNames = 'root' | 'container';

export interface SimpleGridProps
  extends BoxProps,
    StylesApiProps<SimpleGridFactory>,
    ElementProps<'div'> {
  /** Number of columns, `1` by default */
  cols?: StyleProp<number>;

  /** Spacing between columns, `'md'` by default */
  spacing?: StyleProp<MantineSpacing>;

  /** Spacing between rows, `'md'` by default */
  verticalSpacing?: StyleProp<MantineSpacing>;

  /** Determines typeof of queries that are used for responsive styles, `'media'` by default */
  type?: 'media' | 'container';
}

export type SimpleGridFactory = Factory<{
  props: SimpleGridProps;
  ref: HTMLDivElement;
  stylesNames: SimpleGridStylesNames;
}>;

const defaultProps: Partial<SimpleGridProps> = {
  cols: 1,
  spacing: 'md',
  type: 'media',
};

export const SimpleGrid = factory<SimpleGridFactory>((_props, ref) => {
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
    vars,
  });

  const responsiveClassName = useRandomClassName();

  if (type === 'container') {
    return (
      <>
        <SimpleGridContainerVariables {...props} selector={`.${responsiveClassName}`} />
        <div {...getStyles('container')}>
          <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others} />
        </div>
      </>
    );
  }

  return (
    <>
      <SimpleGridMediaVariables {...props} selector={`.${responsiveClassName}`} />
      <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others} />
    </>
  );
});

SimpleGrid.classes = classes;
SimpleGrid.displayName = '@mantine/core/SimpleGrid';

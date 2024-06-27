import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { ScrollArea } from '../ScrollArea';
import classes from './Table.module.css';

export type TableScrollContainerStylesNames = 'scrollContainer' | 'scrollContainerInner';
export type TableScrollContainerCssVariables = {
  scrollContainer: '--table-min-width' | '--table-overflow';
};

export interface TableScrollContainerProps
  extends BoxProps,
    StylesApiProps<TableScrollContainerFactory>,
    ElementProps<'div'> {
  /** `min-width` of the `Table` at which it should become scrollable */
  minWidth: React.CSSProperties['minWidth'];

  /** Type of the scroll container, `native` to use native scrollbars, `scrollarea` to use `ScrollArea` component, `scrollarea` by default */
  type?: 'native' | 'scrollarea';
}

export type TableScrollContainerFactory = Factory<{
  props: TableScrollContainerProps;
  ref: HTMLDivElement;
  stylesNames: TableScrollContainerStylesNames;
  vars: TableScrollContainerCssVariables;
}>;

const defaultProps: Partial<TableScrollContainerProps> = {
  type: 'scrollarea',
};

const varsResolver = createVarsResolver<TableScrollContainerFactory>((_, { minWidth, type }) => ({
  scrollContainer: {
    '--table-min-width': rem(minWidth),
    '--table-overflow': type === 'native' ? 'auto' : undefined,
  },
}));

export const TableScrollContainer = factory<TableScrollContainerFactory>((_props, ref) => {
  const props = useProps('TableScrollContainer', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    minWidth,
    type,
    ...others
  } = props;

  const getStyles = useStyles<TableScrollContainerFactory>({
    name: 'TableScrollContainer',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'scrollContainer',
  });

  return (
    <Box<any>
      component={type === 'scrollarea' ? ScrollArea : 'div'}
      {...(type === 'scrollarea' ? { offsetScrollbars: 'x' } : {})}
      ref={ref}
      {...getStyles('scrollContainer')}
      {...others}
    >
      <div {...getStyles('scrollContainerInner')}>{children}</div>
    </Box>
  );
});

TableScrollContainer.classes = classes;
TableScrollContainer.displayName = '@mantine/core/TableScrollContainer';

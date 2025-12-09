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
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import classes from './Table.module.css';

export type TableScrollContainerStylesNames = 'scrollContainer' | 'scrollContainerInner';
export type TableScrollContainerCssVariables = {
  scrollContainer: '--table-min-width' | '--table-max-height' | '--table-overflow';
};

export interface TableScrollContainerProps
  extends BoxProps, StylesApiProps<TableScrollContainerFactory>, ElementProps<'div'> {
  /** `min-width` of the `Table` at which it should become scrollable */
  minWidth: React.CSSProperties['minWidth'];

  /** `max-height` of the `Table` at which it should become scrollable */
  maxHeight?: React.CSSProperties['maxHeight'];

  /** Type of the scroll container, `native` to use native scrollbars, `scrollarea` to use `ScrollArea` component @default `'scrollarea'` */
  type?: 'native' | 'scrollarea';

  /** Props passed down to `ScrollArea` component, not applicable with `type="native"` */
  scrollAreaProps?: ScrollAreaProps;
}

export type TableScrollContainerFactory = Factory<{
  props: TableScrollContainerProps;
  ref: HTMLDivElement;
  stylesNames: TableScrollContainerStylesNames;
  vars: TableScrollContainerCssVariables;
}>;

const defaultProps = {
  type: 'scrollarea',
} satisfies Partial<TableScrollContainerProps>;

const varsResolver = createVarsResolver<TableScrollContainerFactory>(
  (_, { minWidth, maxHeight, type }) => ({
    scrollContainer: {
      '--table-min-width': rem(minWidth),
      '--table-max-height': rem(maxHeight),
      '--table-overflow': type === 'native' ? 'auto' : undefined,
    },
  })
);

export const TableScrollContainer = factory<TableScrollContainerFactory>((_props) => {
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
    maxHeight,
    type,
    scrollAreaProps,
    attributes,
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
    attributes,
    vars,
    varsResolver,
    rootSelector: 'scrollContainer',
  });

  return (
    <Box<any>
      component={type === 'scrollarea' ? ScrollArea : 'div'}
      {...(type === 'scrollarea'
        ? maxHeight
          ? { offsetScrollbars: 'xy', ...scrollAreaProps }
          : { offsetScrollbars: 'x', ...scrollAreaProps }
        : {})}
      {...getStyles('scrollContainer')}
      {...others}
    >
      <div {...getStyles('scrollContainerInner')}>{children}</div>
    </Box>
  );
});

TableScrollContainer.classes = classes;
TableScrollContainer.displayName = '@mantine/core/TableScrollContainer';

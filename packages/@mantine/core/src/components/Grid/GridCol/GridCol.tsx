import cx from 'clsx';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  StyleProp,
  useProps,
  useRandomClassName,
} from '../../../core';
import { useGridContext } from '../Grid.context';
import classes from '../Grid.module.css';
import { GridColVariables } from './GridColVariables';

export type GridColStylesNames = 'col';
export type ColSpan = number | 'auto' | 'content';

export interface GridColProps
  extends BoxProps, CompoundStylesApiProps<GridColFactory>, ElementProps<'div'> {
  /** Column span @default `12` */
  span?: StyleProp<ColSpan>;

  /** Column order, use to reorder columns at different viewport sizes */
  order?: StyleProp<number>;

  /** Column start offset – number of empty columns before this column */
  offset?: StyleProp<number>;
}

export type GridColFactory = Factory<{
  props: GridColProps;
  ref: HTMLDivElement;
  stylesNames: GridColStylesNames;
  compound: true;
}>;

const defaultProps = {
  span: 12,
} satisfies Partial<GridColProps>;

export const GridCol = factory<GridColFactory>((_props) => {
  const props = useProps('GridCol', defaultProps, _props);
  const { classNames, className, style, styles, vars, span, order, offset, ...others } = props;
  const ctx = useGridContext();
  const responsiveClassName = useRandomClassName();
  return (
    <>
      <GridColVariables
        selector={`.${responsiveClassName}`}
        span={span}
        order={order}
        offset={offset}
      />

      <Box
        {...ctx.getStyles('col', {
          className: cx(className, responsiveClassName),
          style,
          classNames,
          styles,
        })}
        {...others}
      />
    </>
  );
});

GridCol.classes = classes;
GridCol.displayName = '@mantine/core/GridCol';

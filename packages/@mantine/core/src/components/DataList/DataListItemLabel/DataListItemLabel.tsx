import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useDataListContext } from '../DataList.context';
import classes from '../DataList.module.css';

export type DataListItemLabelStylesNames = 'itemLabel';

export interface DataListItemLabelProps
  extends BoxProps, CompoundStylesApiProps<DataListItemLabelFactory>, ElementProps<'dt'> {
  /** Label content */
  children?: React.ReactNode;
}

export type DataListItemLabelFactory = Factory<{
  props: DataListItemLabelProps;
  ref: HTMLElement;
  stylesNames: DataListItemLabelStylesNames;
  compound: true;
}>;

export const DataListItemLabel = factory<DataListItemLabelFactory>((_props) => {
  const props = useProps('DataListItemLabel', null, _props);
  const { classNames, className, style, styles, vars, children, mod, ...others } = props;

  const ctx = useDataListContext();
  const stylesApiProps = { classNames, styles };

  return (
    <Box
      component="dt"
      {...ctx.getStyles('itemLabel', { ...stylesApiProps, className, style })}
      mod={mod}
      {...others}
    >
      {children}
    </Box>
  );
});

DataListItemLabel.classes = classes;
DataListItemLabel.displayName = '@mantine/core/DataListItemLabel';

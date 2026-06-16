import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  getLineHeight,
  getSpacing,
  MantineSize,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { DataListProvider } from './DataList.context';
import { DataListItem, DataListItemStylesNames } from './DataListItem/DataListItem';
import {
  DataListItemLabel,
  DataListItemLabelStylesNames,
} from './DataListItemLabel/DataListItemLabel';
import {
  DataListItemValue,
  DataListItemValueStylesNames,
} from './DataListItemValue/DataListItemValue';
import classes from './DataList.module.css';

export type DataListStylesNames =
  | 'root'
  | DataListItemStylesNames
  | DataListItemLabelStylesNames
  | DataListItemValueStylesNames;

export type DataListCssVariables = {
  root: '--data-list-fz' | '--data-list-lh' | '--data-list-gap' | '--data-list-label-width';
};

export interface DataListProps
  extends BoxProps, StylesApiProps<DataListFactory>, ElementProps<'dl'> {
  /** DataList.Item components */
  children?: React.ReactNode;

  /** Controls `font-size` and `line-height` @default 'sm' */
  size?: MantineSize;

  /** Key of `theme.spacing` or any valid CSS value to set gap between items @default 'sm' */
  gap?: MantineSpacing;

  /** Controls arrangement of label and value within each item. `horizontal` renders label and value side by side, `vertical` stacks label on top of value @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Adds border between items @default false */
  withDivider?: boolean;

  /** Controls min-width of the label (dt) element, any valid CSS value @default '120px' */
  labelWidth?: React.CSSProperties['minWidth'];
}

export type DataListFactory = Factory<{
  props: DataListProps;
  ref: HTMLDListElement;
  stylesNames: DataListStylesNames;
  vars: DataListCssVariables;
  staticComponents: {
    Item: typeof DataListItem;
    ItemLabel: typeof DataListItemLabel;
    ItemValue: typeof DataListItemValue;
  };
}>;

const defaultProps = {
  orientation: 'horizontal',
} satisfies Partial<DataListProps>;

const varsResolver = createVarsResolver<DataListFactory>((_, { size, gap, labelWidth }) => ({
  root: {
    '--data-list-fz': getFontSize(size),
    '--data-list-lh': getLineHeight(size),
    '--data-list-gap': getSpacing(gap),
    '--data-list-label-width':
      labelWidth !== undefined
        ? typeof labelWidth === 'number'
          ? `${labelWidth}px`
          : labelWidth
        : undefined,
  },
}));

export const DataList = factory<DataListFactory>((_props) => {
  const props = useProps('DataList', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    gap,
    orientation,
    withDivider,
    labelWidth,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<DataListFactory>({
    name: 'DataList',
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

  return (
    <DataListProvider value={{ getStyles }}>
      <Box<any>
        {...getStyles('root')}
        component="dl"
        mod={[{ orientation, 'with-divider': withDivider }, mod]}
        {...others}
      >
        {children}
      </Box>
    </DataListProvider>
  );
});

DataList.classes = classes;
DataList.varsResolver = varsResolver;
DataList.displayName = '@mantine/core/DataList';
DataList.Item = DataListItem;
DataList.ItemLabel = DataListItemLabel;
DataList.ItemValue = DataListItemValue;

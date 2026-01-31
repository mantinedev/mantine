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
import { ListProvider } from './List.context';
import classes from './List.module.css';
import { ListItem, ListItemStylesNames } from './ListItem/ListItem';

export type ListStylesNames = 'root' | ListItemStylesNames;
export type ListCssVariables = {
  root: '--list-fz' | '--list-lh' | '--list-spacing';
};

export interface ListProps
  extends BoxProps, StylesApiProps<ListFactory>, ElementProps<'ol', 'type'> {
  /** `List.Item` components */
  children?: React.ReactNode;

  /** List type @default 'unordered' */
  type?: 'ordered' | 'unordered';

  /** Adds extra horizontal padding to the list, useful for nested lists @default false */
  withPadding?: boolean;

  /** Controls `font-size` and `line-height` @default 'md' */
  size?: MantineSize;

  /** Icon to replace default list markers. Applied to all items unless overridden on individual List.Item components */
  icon?: React.ReactNode;

  /** Key of `theme.spacing` or any valid CSS value to set spacing between items @default 0 */
  spacing?: MantineSpacing;

  /** Vertically centers list items with their icons @default false */
  center?: boolean;

  /** Controls CSS `list-style-type` property. Overrides the default list marker style based on list type */
  listStyleType?: React.CSSProperties['listStyleType'];

  /** Starting value for ordered list numbering (only works with type="ordered") */
  start?: number;

  /** Reverses the order of list items (only works with type="ordered") */
  reversed?: boolean;
}

export type ListFactory = Factory<{
  props: ListProps;
  ref: HTMLUListElement;
  stylesNames: ListStylesNames;
  vars: ListCssVariables;
  staticComponents: {
    Item: typeof ListItem;
  };
}>;

const defaultProps = {
  type: 'unordered',
} satisfies Partial<ListProps>;

const varsResolver = createVarsResolver<ListFactory>((_, { size, spacing }) => ({
  root: {
    '--list-fz': getFontSize(size),
    '--list-lh': getLineHeight(size),
    '--list-spacing': getSpacing(spacing),
  },
}));

export const List = factory<ListFactory>((_props) => {
  const props = useProps('List', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    withPadding,
    icon,
    spacing,
    center,
    listStyleType,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<ListFactory>({
    name: 'List',
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
    <ListProvider value={{ center, icon, getStyles }}>
      <Box<any>
        {...getStyles('root', { style: { listStyleType } })}
        component={type === 'unordered' ? 'ul' : 'ol'}
        mod={[{ 'with-padding': withPadding, type: icon ? 'none' : listStyleType }, mod]}
        {...others}
      >
        {children}
      </Box>
    </ListProvider>
  );
});

List.classes = classes;
List.varsResolver = varsResolver;
List.displayName = '@mantine/core/List';
List.Item = ListItem;

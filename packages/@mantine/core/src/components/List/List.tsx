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
import { ListItem, ListItemStylesNames } from './ListItem/ListItem';
import classes from './List.module.css';

export type ListStylesNames = 'root' | ListItemStylesNames;
export type ListCssVariables = {
  root: '--list-fz' | '--list-lh' | '--list-spacing';
};

export interface ListProps
  extends BoxProps,
    StylesApiProps<ListFactory>,
    ElementProps<'ol', 'type'> {
  /** `List.Item` components */
  children?: React.ReactNode;

  /** List type @default `'unordered'` */
  type?: 'ordered' | 'unordered';

  /** Determines whether list items should be offset with padding @default `false` */
  withPadding?: boolean;

  /** Controls `font-size` and `line-height` @default `'md'` */
  size?: MantineSize;

  /** Icon to replace list item dot */
  icon?: React.ReactNode;

  /** Key of `theme.spacing` or any valid CSS value to set spacing between items @default `0` */
  spacing?: MantineSpacing;

  /** Determines whether items must be centered with their icon @default `false` */
  center?: boolean;

  /** Controls `list-style-type`, by default inferred from `type` */
  listStyleType?: React.CSSProperties['listStyleType'];
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

export const List = factory<ListFactory>((_props, ref) => {
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
        mod={[{ 'with-padding': withPadding, type: listStyleType }, mod]}
        ref={ref}
        {...others}
      >
        {children}
      </Box>
    </ListProvider>
  );
});

List.classes = classes;
List.displayName = '@mantine/core/List';
List.Item = ListItem;

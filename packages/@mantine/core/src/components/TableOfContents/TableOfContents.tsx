import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './TableOfContents.module.css';

export type TableOfContentsStylesNames = 'root';
export type TableOfContentsVariant = 'filled' | 'light' | 'unstyled';
export type TableOfContentsCssVariables = {
  root: '--test';
};

export interface TableOfContentsProps
  extends BoxProps,
    StylesApiProps<TableOfContentsFactory>,
    ElementProps<'div'> {}

export type TableOfContentsFactory = Factory<{
  props: TableOfContentsProps;
  ref: HTMLDivElement;
  stylesNames: TableOfContentsStylesNames;
  vars: TableOfContentsCssVariables;
  variant: TableOfContentsVariant;
}>;

const defaultProps: Partial<TableOfContentsProps> = {};

const varsResolver = createVarsResolver<TableOfContentsFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const TableOfContents = factory<TableOfContentsFactory>((_props, ref) => {
  const props = useProps('TableOfContents', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<TableOfContentsFactory>({
    name: 'TableOfContents',
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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

TableOfContents.displayName = '@mantine/core/TableOfContents';
TableOfContents.classes = classes;

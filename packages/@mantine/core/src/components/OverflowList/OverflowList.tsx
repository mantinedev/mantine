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
} from '../../core';
import classes from './OverflowList.module.css';

export type OverflowListStylesNames = 'root';
export type OverflowListCssVariables = {
  root: '--test';
};

export interface OverflowListProps
  extends BoxProps,
    StylesApiProps<OverflowListFactory>,
    ElementProps<'div'> {}

export type OverflowListFactory = Factory<{
  props: OverflowListProps;
  ref: HTMLDivElement;
  stylesNames: OverflowListStylesNames;
  vars: OverflowListCssVariables;
}>;

const defaultProps = {} satisfies Partial<OverflowListProps>;

const varsResolver = createVarsResolver<OverflowListFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const OverflowList = factory<OverflowListFactory>((_props, ref) => {
  const props = useProps('OverflowList', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<OverflowListFactory>({
    name: 'OverflowList',
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

OverflowList.displayName = '@mantine/core/OverflowList';
OverflowList.classes = classes;

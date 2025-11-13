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
import classes from './YearView.module.css';

export type YearViewStylesNames = 'yearView';
export type YearViewVariant = string;
export type YearViewCssVariables = {
  yearView: '--test';
};

export interface YearViewProps
  extends BoxProps,
    StylesApiProps<YearViewFactory>,
    ElementProps<'div'> {}

export type YearViewFactory = Factory<{
  props: YearViewProps;
  ref: HTMLDivElement;
  stylesNames: YearViewStylesNames;
  vars: YearViewCssVariables;
  variant: YearViewVariant;
}>;

const defaultProps = {} satisfies Partial<YearViewProps>;

const varsResolver = createVarsResolver<YearViewFactory>(() => ({
  yearView: {
    '--test': 'test',
  },
}));

export const YearView = factory<YearViewFactory>((_props) => {
  const props = useProps('YearView', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<YearViewFactory>({
    name: 'YearView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'yearView',
  });

  return <Box {...getStyles('yearView')} {...others} />;
});

YearView.displayName = '@mantine/schedule/YearView';
YearView.classes = classes;

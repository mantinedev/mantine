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
import classes from './WeekView.module.css';

export type WeekViewStylesNames = 'weekView';
export type WeekViewCssVariables = {
  weekView: '--test';
};

export interface WeekViewProps
  extends BoxProps,
    StylesApiProps<WeekViewFactory>,
    ElementProps<'div'> {
  /** Week to display, Date object or date string in `YYYY-MM-DD` format */
  week: Date | string;
}

export type WeekViewFactory = Factory<{
  props: WeekViewProps;
  ref: HTMLDivElement;
  stylesNames: WeekViewStylesNames;
  vars: WeekViewCssVariables;
}>;

const defaultProps = {} satisfies Partial<WeekViewProps>;

const varsResolver = createVarsResolver<WeekViewFactory>(() => ({
  weekView: {
    '--test': 'test',
  },
}));

export const WeekView = factory<WeekViewFactory>((_props) => {
  const props = useProps('WeekView', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<WeekViewFactory>({
    name: 'WeekView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'weekView',
  });

  return <Box {...getStyles('weekView')} {...others} />;
});

WeekView.displayName = '@mantine/schedule/WeekView';
WeekView.classes = classes;

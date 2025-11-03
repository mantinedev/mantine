import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './MonthView.module.css';

export type MonthViewStylesNames = 'root';

export interface MonthViewProps
  extends BoxProps,
    StylesApiProps<MonthViewFactory>,
    ElementProps<'div'> {}

export type MonthViewFactory = Factory<{
  props: MonthViewProps;
  ref: HTMLDivElement;
  stylesNames: MonthViewStylesNames;
}>;

const defaultProps = {} satisfies Partial<MonthViewProps>;

export const MonthView = factory<MonthViewFactory>((_props) => {
  const props = useProps('MonthView', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<MonthViewFactory>({
    name: 'MonthView',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  return (
    <Box {...getStyles('root')} {...others}>
      MonthView
    </Box>
  );
});

MonthView.displayName = '@mantine/core/MonthView';
MonthView.classes = classes;

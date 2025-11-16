import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './CurrentTimeIndicator.module.css';

export type CurrentTimeIndicatorStylesNames =
  | 'currentTimeIndicator'
  | 'currentTimeIndicatorLine'
  | 'currentTimeIndicatorThumb';

export type CurrentTimeIndicatorCssVariables = {
  currentTimeIndicator: '--indicator-color';
};

export interface CurrentTimeIndicatorProps
  extends BoxProps,
    StylesApiProps<CurrentTimeIndicatorFactory>,
    ElementProps<'div'> {
  /** Key of `theme.colors` or any valid CSS color value @default `'red'` */
  color?: MantineColor;
}

export type CurrentTimeIndicatorFactory = Factory<{
  props: CurrentTimeIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: CurrentTimeIndicatorStylesNames;
  vars: CurrentTimeIndicatorCssVariables;
}>;

const defaultProps = {} satisfies Partial<CurrentTimeIndicatorProps>;

const varsResolver = createVarsResolver<CurrentTimeIndicatorFactory>((theme, { color }) => ({
  currentTimeIndicator: {
    '--indicator-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const CurrentTimeIndicator = factory<CurrentTimeIndicatorFactory>((_props) => {
  const props = useProps('CurrentTimeIndicator', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<CurrentTimeIndicatorFactory>({
    name: 'CurrentTimeIndicator',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'currentTimeIndicator',
  });

  return (
    <Box {...getStyles('currentTimeIndicator')} {...others}>
      <div {...getStyles('currentTimeIndicatorThumb')} />
      <div {...getStyles('currentTimeIndicatorLine')} />
    </Box>
  );
});

CurrentTimeIndicator.displayName = '@mantine/schedule/CurrentTimeIndicator';
CurrentTimeIndicator.classes = classes;

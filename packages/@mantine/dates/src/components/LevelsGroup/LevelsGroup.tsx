import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './LevelsGroup.module.css';

export type LevelsGroupStylesNames = 'levelsGroup';

export interface LevelsGroupProps
  extends BoxProps,
    StylesApiProps<LevelsGroupFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;
  size?: MantineSize;
}

export type LevelsGroupFactory = Factory<{
  props: LevelsGroupProps;
  ref: HTMLDivElement;
  stylesNames: LevelsGroupStylesNames;
}>;

const defaultProps: Partial<LevelsGroupProps> = {};

export const LevelsGroup = factory<LevelsGroupFactory>((_props, ref) => {
  const props = useProps('LevelsGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } =
    props;

  const getStyles = useStyles<LevelsGroupFactory>({
    name: __staticSelector || 'LevelsGroup',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: 'levelsGroup',
  });

  return <Box ref={ref} {...getStyles('levelsGroup')} {...others} />;
});

LevelsGroup.classes = classes;
LevelsGroup.displayName = '@mantine/dates/LevelsGroup';

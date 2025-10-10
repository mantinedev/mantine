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

export const LevelsGroup = factory<LevelsGroupFactory>((_props) => {
  const props = useProps('LevelsGroup', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<LevelsGroupFactory>({
    name: __staticSelector || 'LevelsGroup',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    rootSelector: 'levelsGroup',
  });

  return <Box {...getStyles('levelsGroup')} {...others} />;
});

LevelsGroup.classes = classes;
LevelsGroup.displayName = '@mantine/dates/LevelsGroup';

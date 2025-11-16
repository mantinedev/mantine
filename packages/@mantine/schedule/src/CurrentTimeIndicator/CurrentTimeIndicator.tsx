import dayjs from 'dayjs';
import { useState } from 'react';
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
import { useInterval } from '@mantine/hooks';
import classes from './CurrentTimeIndicator.module.css';

function getOffsetPercent() {
  const startOf = dayjs().startOf('date');
  const now = dayjs();
  const diffInMinutes = now.diff(startOf, 'minute');
  return (diffInMinutes / 1440) * 100;
}

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

  /** Offset from the left side */
  startOffset?: string;

  /** Offset from the right side */
  endOffset?: string;
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
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    startOffset,
    endOffset,
    color,
    ...others
  } = props;

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

  const [offsetPercent, setOffsetPercent] = useState(getOffsetPercent());
  useInterval(() => setOffsetPercent(getOffsetPercent()), 1000 * 60 * 2, { autoInvoke: true });

  return (
    <Box
      {...getStyles('currentTimeIndicator')}
      __vars={{
        '--top-offset': `${offsetPercent}%`,
        '--start-offset': startOffset,
        '--end-offset': endOffset,
      }}
      {...others}
    >
      <div {...getStyles('currentTimeIndicatorThumb')} />
      <div {...getStyles('currentTimeIndicatorLine')} />
    </Box>
  );
});

CurrentTimeIndicator.displayName = '@mantine/schedule/CurrentTimeIndicator';
CurrentTimeIndicator.classes = classes;

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
import { DateLabelFormat } from '../../types';
import { formatDate, getCurrentTimePercent } from '../../utils';
import { useScheduleContext } from '../Schedule/Schedule.context';
import classes from './CurrentTimeIndicator.module.css';

export type CurrentTimeIndicatorStylesNames =
  | 'currentTimeIndicator'
  | 'currentTimeIndicatorLine'
  | 'currentTimeIndicatorThumb'
  | 'currentTimeIndicatorTimeBubble';

export type CurrentTimeIndicatorCssVariables = {
  currentTimeIndicator: '--indicator-color';
};

export interface CurrentTimeIndicatorProps
  extends BoxProps, StylesApiProps<CurrentTimeIndicatorFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Key of `theme.colors` or any valid CSS color value @default `'red'` */
  color?: MantineColor;

  /** Offset from the left side */
  startOffset?: string;

  /** Offset from the right side */
  endOffset?: string;

  /** Extra configurable offset from the top */
  topOffset?: string;

  /** Offset for the time bubble */
  timeBubbleStartOffset?: string;

  /** If set, displays a bubble with the current time @default `@true` */
  withTimeBubble?: boolean;

  /** If set, displays thumb next to the line @default `true` */
  withThumb?: boolean;

  /** Format of the time displayed in the time bubble @default `'HH:mm'` */
  currentTimeFormat?: DateLabelFormat;

  /** Locale passed down to dayjs during formatting */
  locale?: string;

  /** Start time of the day */
  startTime?: string;

  /** End time of the day */
  endTime?: string;
}

export type CurrentTimeIndicatorFactory = Factory<{
  props: CurrentTimeIndicatorProps;
  ref: HTMLDivElement;
  stylesNames: CurrentTimeIndicatorStylesNames;
  vars: CurrentTimeIndicatorCssVariables;
}>;

const defaultProps = {
  __staticSelector: 'CurrentTimeIndicator',
  withTimeBubble: true,
  withThumb: true,
  currentTimeFormat: 'HH:mm',
  topOffset: '0rem',
} satisfies Partial<CurrentTimeIndicatorProps>;

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
    attributes,
    startOffset,
    endOffset,
    color,
    withTimeBubble,
    withThumb,
    currentTimeFormat,
    locale,
    timeBubbleStartOffset,
    __staticSelector,
    topOffset,
    startTime,
    endTime,
    ...others
  } = props;

  const getStyles = useStyles<CurrentTimeIndicatorFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    attributes,
    rootSelector: 'currentTimeIndicator',
  });

  const ctx = useScheduleContext();
  const [offsetPercent, setOffsetPercent] = useState(getCurrentTimePercent({ startTime, endTime }));
  useInterval(() => setOffsetPercent(getCurrentTimePercent({ startTime, endTime })), 1000 * 60, {
    autoInvoke: true,
  });
  const formattedTime = withTimeBubble
    ? formatDate({ locale: ctx.getLocale(locale), date: dayjs(), format: currentTimeFormat })
    : '';

  return (
    <Box
      {...getStyles('currentTimeIndicator')}
      __vars={{
        '--top-offset': `calc(${offsetPercent}% + ${topOffset})`,
        '--start-offset': startOffset,
        '--end-offset': endOffset,
        '--time-bubble-start-offset': timeBubbleStartOffset,

        // Adjust time bubble width for formats including AM/PM
        '--time-bubble-width': formattedTime?.toString().toLowerCase().includes('m')
          ? '64px'
          : '46px',
      }}
      {...others}
    >
      {withTimeBubble && (
        <div {...getStyles('currentTimeIndicatorTimeBubble')}>{formattedTime}</div>
      )}

      {withThumb && <div {...getStyles('currentTimeIndicatorThumb')} />}

      <div {...getStyles('currentTimeIndicatorLine')} />
    </Box>
  );
});

CurrentTimeIndicator.displayName = '@mantine/schedule/CurrentTimeIndicator';
CurrentTimeIndicator.classes = classes;

import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineRadius,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ScheduleViewLevel } from '../../types';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleHeaderControl } from './ScheduleHeaderControl';
import classes from './ScheduleHeader.module.css';

export type ViewSelectStylesNames = 'viewSelect';

export interface ViewSelectProps
  extends BoxProps,
    StylesApiProps<ViewSelectFactory>,
    ElementProps<'div', 'value' | 'onChange'> {
  __staticSelector?: string;

  /** A list of views to display @default `['day', 'week', 'month', 'year']` */
  views?: readonly ScheduleViewLevel[];

  /** Selected view type */
  value?: ScheduleViewLevel;

  /** Called when view type changes */
  onChange?: (value: ScheduleViewLevel) => void;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;
}

export type ViewSelectFactory = Factory<{
  props: ViewSelectProps;
  ref: HTMLDivElement;
  stylesNames: ViewSelectStylesNames;
}>;

const defaultProps = {
  views: ['day', 'week', 'month', 'year'],
} satisfies Partial<ViewSelectProps>;

export const ViewSelect = factory<ViewSelectFactory>((_props) => {
  const props = useProps('ScheduleHeaderViewSelect', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    value,
    onChange,
    views,
    __staticSelector,
    radius,
    ...others
  } = props;

  const getStyles = useStyles<ViewSelectFactory>({
    name: __staticSelector || 'ScheduleHeaderViewSelect',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    rootSelector: 'viewSelect',
  });

  const ctx = useScheduleContext();
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ViewSelectFactory>({
    classNames,
    styles,
    props,
  });

  const labels: Record<ScheduleViewLevel, string> = {
    day: ctx.labels.switchToDayView,
    week: ctx.labels.switchToWeekView,
    month: ctx.labels.switchToMonthView,
    year: ctx.labels.switchToYearView,
  };

  const items = views.map((view) => (
    <ScheduleHeaderControl
      key={view}
      data-type={view}
      active={value === view}
      onClick={() => onChange?.(view)}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector || 'ScheduleHeaderViewSelect'}
      aria-label={labels[view]}
      radius={radius}
    >
      {ctx.labels[view]}
    </ScheduleHeaderControl>
  ));

  return (
    <Box {...getStyles('viewSelect')} {...others}>
      {items}
    </Box>
  );
});

ViewSelect.displayName = '@mantine/schedule/ViewSelect';
ViewSelect.classes = classes;

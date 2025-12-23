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
import { getLabel, ScheduleLabelsOverride } from '../../../labels';
import { ScheduleViewLevel } from '../../../types';
import { HeaderControl } from '../HeaderControl/HeaderControl';
import classes from './ViewSelect.module.css';

export type ViewSelectStylesNames = 'viewSelect';

export interface ViewSelectProps
  extends BoxProps, StylesApiProps<ViewSelectFactory>, ElementProps<'div', 'value' | 'onChange'> {
  __staticSelector?: string;

  /** A list of views to display @default `['day', 'week', 'month', 'year']` */
  views?: readonly ScheduleViewLevel[];

  /** Selected view type */
  value?: ScheduleViewLevel;

  /** Called when view type changes */
  onChange?: (value: ScheduleViewLevel) => void;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Labels override */
  labels?: ScheduleLabelsOverride;
}

export type ViewSelectFactory = Factory<{
  props: ViewSelectProps;
  ref: HTMLDivElement;
  stylesNames: ViewSelectStylesNames;
}>;

const defaultProps = {
  __staticSelector: 'ViewSelect',
  views: ['day', 'week', 'month', 'year'],
} satisfies Partial<ViewSelectProps>;

export const ViewSelect = factory<ViewSelectFactory>((_props) => {
  const props = useProps('ViewSelect', defaultProps, _props);
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
    labels,
    ...others
  } = props;

  const getStyles = useStyles<ViewSelectFactory>({
    name: __staticSelector,
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

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ViewSelectFactory>({
    classNames,
    styles,
    props,
  });

  const switchLabels: Record<ScheduleViewLevel, string> = {
    day: getLabel('switchToDayView', labels),
    week: getLabel('switchToWeekView', labels),
    month: getLabel('switchToMonthView', labels),
    year: getLabel('switchToYearView', labels),
  };

  const items = views.map((view) => (
    <HeaderControl
      key={view}
      data-type={view}
      active={value === view}
      onClick={() => onChange?.(view)}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector={__staticSelector}
      aria-label={switchLabels[view]}
      radius={radius}
    >
      {getLabel(view, labels)}
    </HeaderControl>
  ));

  return (
    <Box {...getStyles('viewSelect')} {...others}>
      {items}
    </Box>
  );
});

ViewSelect.displayName = '@mantine/schedule/ViewSelect';
ViewSelect.classes = classes;

import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '@mantine/core';
import { ScheduleViewLevel } from '../../types';
import { useScheduleContext } from '../Schedule/Schedule.context';
import { ScheduleHeaderControl } from './ScheduleHeaderControl';
import classes from './ScheduleHeader.module.css';

export type ScheduleHeaderViewSelectStylesNames = 'headerViewSelect';
export type ScheduleHeaderViewSelectVariant = string;
export type ScheduleHeaderViewSelectCssVariables = {
  root: '--test';
};

export interface ScheduleHeaderViewSelectProps
  extends BoxProps,
    StylesApiProps<ScheduleHeaderViewSelectFactory>,
    ElementProps<'div', 'value' | 'onChange'> {
  __staticSelector?: string;

  /** A list of views to display */
  views: ScheduleViewLevel[];

  /** Selected view type */
  value: ScheduleViewLevel;

  /** Called when view type changes */
  onChange: (value: ScheduleViewLevel) => void;
}

export type ScheduleHeaderViewSelectFactory = Factory<{
  props: ScheduleHeaderViewSelectProps;
  ref: HTMLDivElement;
  stylesNames: ScheduleHeaderViewSelectStylesNames;
  vars: ScheduleHeaderViewSelectCssVariables;
  variant: ScheduleHeaderViewSelectVariant;
}>;

const defaultProps = {} satisfies Partial<ScheduleHeaderViewSelectProps>;

const varsResolver = createVarsResolver<ScheduleHeaderViewSelectFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const ScheduleHeaderViewSelect = factory<ScheduleHeaderViewSelectFactory>((_props) => {
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
    ...others
  } = props;

  const getStyles = useStyles<ScheduleHeaderViewSelectFactory>({
    name: 'ScheduleHeaderViewSelect',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
    rootSelector: 'headerViewSelect',
  });

  const ctx = useScheduleContext();
  const { resolvedClassNames, resolvedStyles } =
    useResolvedStylesApi<ScheduleHeaderViewSelectFactory>({ classNames, styles, props });

  const items = views.map((view) => (
    <ScheduleHeaderControl
      key={view}
      data-type={view}
      active={value === view}
      onClick={() => onChange(view)}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
    >
      {ctx.labels[view]}
    </ScheduleHeaderControl>
  ));

  return (
    <Box {...getStyles('headerViewSelect')} {...others}>
      {items}
    </Box>
  );
});

ScheduleHeaderViewSelect.displayName = '@mantine/core/ScheduleHeaderViewSelect';
ScheduleHeaderViewSelect.classes = classes;

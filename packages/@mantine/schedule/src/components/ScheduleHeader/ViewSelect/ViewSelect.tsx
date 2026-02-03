import { useRef } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  MantineRadius,
  StylesApiProps,
  useDirection,
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

  /** A list of views to display @default ['day', 'week', 'month', 'year'] */
  views?: readonly ScheduleViewLevel[];

  /** Selected view type */
  value?: ScheduleViewLevel;

  /** Called when view type changes */
  onChange?: (value: ScheduleViewLevel) => void;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
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

  const { dir } = useDirection();
  const controlsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isRtl = dir === 'rtl';
    const nextKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRtl ? 'ArrowRight' : 'ArrowLeft';

    if (event.key === nextKey) {
      event.preventDefault();
      const nextIndex = index < views!.length - 1 ? index + 1 : 0;
      controlsRef.current[nextIndex]?.focus();
    } else if (event.key === prevKey) {
      event.preventDefault();
      const prevIndex = index > 0 ? index - 1 : views!.length - 1;
      controlsRef.current[prevIndex]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      controlsRef.current[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      controlsRef.current[views!.length - 1]?.focus();
    }
  };

  const items = views!.map((view, index) => {
    const isSelected = value === view;
    return (
      <HeaderControl
        key={view}
        ref={(node) => {
          controlsRef.current[index] = node;
        }}
        data-type={view}
        active={isSelected}
        onClick={() => onChange?.(view)}
        onKeyDown={(event) => handleKeyDown(event, index)}
        classNames={resolvedClassNames}
        styles={resolvedStyles}
        __staticSelector={__staticSelector}
        radius={radius}
        role="tab"
        aria-selected={isSelected}
        tabIndex={isSelected ? 0 : -1}
      >
        {getLabel(view, labels)}
      </HeaderControl>
    );
  });

  return (
    <Box
      {...getStyles('viewSelect')}
      role="tablist"
      aria-label={getLabel('viewSelectLabel', labels)}
      {...others}
    >
      {items}
    </Box>
  );
});

ViewSelect.displayName = '@mantine/schedule/ViewSelect';
ViewSelect.classes = classes;

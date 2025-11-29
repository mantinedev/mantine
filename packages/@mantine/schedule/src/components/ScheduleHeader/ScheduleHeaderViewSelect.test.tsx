import { tests } from '@mantine-tests/core';
import {
  ScheduleHeaderViewSelect,
  ScheduleHeaderViewSelectProps,
  ScheduleHeaderViewSelectStylesNames,
} from './ScheduleHeaderViewSelect';

const defaultProps: ScheduleHeaderViewSelectProps = {
  views: ['day', 'week', 'month', 'year'],
  value: 'month',
  onChange: () => {},
};

describe('@mantine/schedule/ScheduleHeaderViewSelect', () => {
  tests.itSupportsSystemProps<ScheduleHeaderViewSelectProps, ScheduleHeaderViewSelectStylesNames>({
    component: ScheduleHeaderViewSelect,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/ScheduleHeaderViewSelect',
    stylesApiSelectors: ['headerViewSelect'],
  });
});

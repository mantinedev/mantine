import { tests } from '@mantine-tests/core';
import { TimeGrid, TimeGridProps, TimeGridStylesNames } from './TimeGrid';

const defaultProps: TimeGridProps = {
  data: ['10:00', '15:00'],
};

describe('@mantine/dates/TimeGrid', () => {
  tests.itSupportsSystemProps<TimeGridProps, TimeGridStylesNames>({
    component: TimeGrid,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/TimeGrid',
    stylesApiSelectors: ['root'],
  });
});

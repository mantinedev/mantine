import { tests } from '@mantine-tests/core';
import {
  MobileMonthView,
  MobileMonthViewProps,
  MobileMonthViewStylesNames,
} from './MobileMonthView';

const defaultProps: MobileMonthViewProps = {
  date: '2025-11-01',
};

describe('@mantine/schedule/MobileMonthView', () => {
  tests.itSupportsSystemProps<MobileMonthViewProps, MobileMonthViewStylesNames>({
    component: MobileMonthView,
    props: defaultProps,
    displayName: '@mantine/schedule/MobileMonthView',
    stylesApiSelectors: ['mobileMonthView'],
  });
});
